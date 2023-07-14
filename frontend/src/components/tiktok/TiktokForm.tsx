"use client";

import { FormEvent, useState } from "react";
import { proxyApiURL, tiktokApiURL } from "@/configs/api";
import { VideoInfo } from "@/types/tiktok";
import { ErrorResponse } from "@/types";
import { Icons } from "@/components/Icons";
import { isJsonResponse, makeApiRequest } from "@/lib/utils";
import { validateTiktokUrl } from "@/lib/tiktok/validators";
import { ClientException } from "@/exceptions";

async function downloadVideo(videoInfo: VideoInfo) {
  try {
    const encodedUrl = encodeURIComponent(videoInfo.video_link);
    const response = await fetch(`${proxyApiURL}?url=${encodedUrl}`);
    const isJson = isJsonResponse(response);
    if (isJson) {
      const json: ErrorResponse = await response.json();
      throw new ClientException(json.message);
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
    console.log(error.message);
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
    setIsLoading(true);
    setErrorMsg("");

    try {
      validateTiktokUrl(inputUrl);
    } catch (error) {
      return handleError(error);
    }

    try {
      const requestArgs = {
        url: `${tiktokApiURL}?url=${inputUrl}`,
        fetchError: "API service is down, please try again later.",
        responseError: "Bad response from the API, please try again.",
      };
      const response = await makeApiRequest<VideoInfo>(requestArgs);

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
      <h1 className="mb-8 text-center text-3xl font-bold md:text-5xl">
        Tiktok Saver
      </h1>
      <form
        className="flex w-full flex-col items-center gap-2 px-4 md:px-0"
        onSubmit={handleSubmit}
      >
        {errorMsg !== "" && (
          <div className="flex w-full items-center gap-2 border-l-4 border-l-red-500 bg-white p-2 text-red-500 md:max-w-2xl">
            <Icons.error />
            {errorMsg}
          </div>
        )}
        <div className="flex w-full flex-col items-center gap-4  md:relative md:max-w-2xl md:flex-row md:px-0">
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
            className="w-full rounded border border-purple-600 bg-gray-100 px-2 py-4 text-gray-700 placeholder-gray-400/80 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded border bg-gradient-to-r from-purple-400 to-blue-600 px-2 py-3 text-white shadow-md md:absolute md:right-2 md:w-fit"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <Icons.loading />
                <span>Fetching</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Icons.download />
                <span>Download</span>
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TiktokForm;
