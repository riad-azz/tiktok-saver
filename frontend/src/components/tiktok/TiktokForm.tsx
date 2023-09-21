"use client";

import { FormEvent, useState } from "react";
import { proxyApiURL, tiktokApiURL } from "@/configs/api";
import { VideoInfo } from "@/types/tiktok";
import { ErrorResponse } from "@/types";

import AlertError from "@/components/AlertError";
import DownloadButton from "@/components/ui/DownloadButton";

import { ClientException } from "@/lib/exceptions";
import { validateTiktokUrl } from "@/lib/tiktok/validators";
import {
  cn,
  isJsonResponse,
  isVideoResponse,
  makeHttpRequest,
} from "@/lib/utils";

async function downloadVideo(videoInfo: VideoInfo) {
  const encodedUrl = encodeURIComponent(videoInfo.video_link);
  if (!encodedUrl) {
    console.error("The encoded url is undefined:", encodedUrl);
    throw new ClientException();
  }
  try {
    const response = await fetch(`${proxyApiURL}?url=${encodedUrl}`);
    const isVideo = isVideoResponse(response);
    if (!isVideo) {
      const isJson = isJsonResponse(response);
      if (isJson) {
        const json: ErrorResponse = await response.json();
        throw new ClientException(json.message);
      } else {
        throw new ClientException();
      }
    }
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = blobUrl;
    a.download = videoInfo.filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error: any) {
    console.error(error.message);
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = videoInfo.video_link;
    a.download = videoInfo.filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}

const TiktokForm = () => {
  const [inputUrl, setInputUrl] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleError(error: any) {
    if (error instanceof ClientException) {
      setErrorMsg(error.message);
    } else {
      console.error(error);
      setErrorMsg(
        "Something went wrong, if this problem persists contact the support."
      );
    }
    setIsLoading(false);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!inputUrl) return setErrorMsg("Please provide a Tiktok URL");
    setIsLoading(true);

    try {
      setErrorMsg("");
      validateTiktokUrl(inputUrl);
    } catch (error) {
      return handleError(error);
    }

    try {
      const requestUrl = `${tiktokApiURL}?url=${inputUrl}`;
      const response = await makeHttpRequest<VideoInfo>({ url: requestUrl });

      if (response.status === "error") {
        throw new ClientException(response.message);
      }

      const videoInfo = response.data;
      await downloadVideo(videoInfo);
    } catch (error: any) {
      return handleError(error);
    }

    setIsLoading(false);
  }

  return (
    <div className="flex h-80 w-full flex-col items-center justify-center bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
      <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-5xl">
        Tiktok Saver
      </h1>
      <form
        className="flex w-full max-w-3xl flex-col items-center gap-2 px-4"
        onSubmit={handleSubmit}
      >
        <AlertError errorMsg={errorMsg} setErrorMsg={setErrorMsg} />
        <div className="flex w-full flex-col items-center gap-2 md:flex-row">
          <label htmlFor="url-input" className="sr-only">
            Enter desired URL
          </label>
          <input
            id="url-input"
            type="url"
            disabled={isLoading}
            value={inputUrl}
            autoComplete={isLoading ? "off" : "on"}
            autoFocus={true}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Paste Tiktok link here..."
            aria-label="video download URL input"
            title="video download URL input"
            className="h-12 w-full rounded border border-gray-300 placeholder-gray-500/80"
          />
          <DownloadButton
            isLoading={isLoading}
            className="w-full md:w-[180px]"
          />
        </div>
      </form>
    </div>
  );
};

export default TiktokForm;
