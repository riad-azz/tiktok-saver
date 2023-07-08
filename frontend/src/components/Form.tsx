"use client";

import { FormEvent, useState } from "react";
import { fetchVideoInfo } from "@/lib/tiktok/actions";
import { proxyApiURL } from "@/configs/config";
import { VideoInfo } from "@/types";

const downloadVideo = async (videoInfo: VideoInfo) => {
  try {
    const encodedUrl = encodeURIComponent(videoInfo.video_link);
    const response = await fetch(`${proxyApiURL}?url=${encodedUrl}`);
    const contentType = response.headers.get("content-type");
    if (!contentType) {
      throw new Error("Bad proxy response");
    } else if (contentType.includes("application/json")) {
      const json = await response.json();
      throw new Error(json.error);
    } else if (!contentType.includes("video/mp4")) {
      throw new Error("Bad proxy response");
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
};

const Form = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleError(error: any) {
    setErrorMsg(error.message);
    setIsLoading(false);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const videoInfo: any = await fetchVideoInfo(videoUrl);

      if (videoInfo.error) {
        throw new Error(videoInfo.error);
      }
      await downloadVideo(videoInfo as VideoInfo);
      setErrorMsg("");
    } catch (error: any) {
      return handleError(error);
    }

    setIsLoading(false);
  }

  return (
    <>
      {errorMsg !== "" && (
        <div className="mb-1 text-sm text-red-500 md:text-base">{errorMsg}</div>
      )}
      <form
        className="flex max-w-md items-center gap-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="url-input" className="sr-only">
          Enter desired URL
        </label>
        <input
          id="url-input"
          type="url"
          value={videoUrl}
          autoFocus={true}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter URL here..."
          aria-label="ideo download URL input"
          title="video download URL input"
          className="w-full rounded border border-slate-400 px-2 py-3 placeholder-gray-400/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-fit rounded bg-blue-500 px-2 py-3 text-white"
        >
          {isLoading ? "Fetching..." : "Download"}
        </button>
      </form>
    </>
  );
};

export default Form;
