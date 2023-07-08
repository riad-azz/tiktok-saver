"use server";

import { tiktokApiURL } from "@/configs/config";
import { VideoInfo } from "@/types";

export const fetchVideoInfo = async (videoUrl: string) => {
  const response = await fetch(`${tiktokApiURL}?url=${videoUrl}`, {
    method: "GET",
  });

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    return { error: "Internal Server Error" };
  }

  const data: VideoInfo = await response.json();
  return data;
};
