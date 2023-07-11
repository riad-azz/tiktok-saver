"use client";

import { FormEvent, useState } from "react";
import { fetchVideoInfo } from "@/lib/tiktok/actions";
import { proxyApiURL } from "@/configs/config";
import { VideoInfo } from "@/types/tiktok";

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

const TiktokForm = () => {
  const [inputUrl, setInputUrl] = useState("");
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
      const videoInfo: any = await fetchVideoInfo(inputUrl);

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
    <div className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#00c6ff] to-[#0072ff] h-80">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Tiktok Saver
      </h1>
      {errorMsg !== "" && (
        <div className="mb-1 w-full md:max-w-2xl p-2 rounded bg-gray-300/50 text-red-500 mx-4 px-4">
          {errorMsg}
        </div>
      )}
      <form
        className="flex flex-col w-full md:max-w-2xl items-center gap-4 md:relative px-4 md:px-0 md:flex-row"
        onSubmit={handleSubmit}
      >
        <label htmlFor="url-input" className="sr-only">
          Enter desired URL
        </label>
        <input
          id="url-input"
          type="url"
          value={inputUrl}
          autoFocus={true}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Paste Tiktok link here..."
          aria-label="video download URL input"
          title="video download URL input"
          className="w-full rounded border text-gray-700 bg-gray-100 border-purple-600 px-2 py-4 placeholder-gray-400/80 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full md:w-fit rounded border bg-gradient-to-r from-purple-400 to-blue-600 px-2 py-3 text-white md:absolute md:right-2 shadow-md"
        >
          {isLoading ? "Fetching..." : "Download"}
        </button>
      </form>
    </div>
  );
};

export default TiktokForm;
