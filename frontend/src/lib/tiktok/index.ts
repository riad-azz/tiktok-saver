import { tiktokApiURL } from "@/configs/api";
import { APIResponse, ErrorResponse } from "@/types";
import { VideoInfo } from "@/types/tiktok";

export const fetchVideoInfo = async (videoUrl: string) => {
  let response;

  try {
    response = await fetch(`${tiktokApiURL}?url=${videoUrl}`);
  } catch (error: any) {
    console.log(error);
    console.log(error.message);
    const response: ErrorResponse = {
      status: "error",
      message: "API service is down, please try again later.",
    };
    return response;
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    const response: ErrorResponse = {
      status: "error",
      message: "Internal Server Error",
    };
    return response;
  }

  const apiResponse: APIResponse<VideoInfo> = await response.json();
  return apiResponse;
};
