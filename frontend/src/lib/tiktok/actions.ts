"use server";

import { tiktokApiURL } from "@/configs/config";
import { APIResponse } from "@/types";
import { VideoInfo } from "@/types/tiktok";

export const fetchVideoInfo = async (videoUrl: string) => {
  let response;
  try {
    response = await fetch(`${tiktokApiURL}?url=${videoUrl}`, {
      method: "GET",
    });
  } catch (error) {
    return { error: "Internal Server Error" };
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    return { error: "Internal Server Error" };
  }

  const apiResponse: APIResponse<VideoInfo> = await response.json();
  return apiResponse;
};
