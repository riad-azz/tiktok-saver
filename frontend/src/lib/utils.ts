import { APIResponse, ErrorResponse, SuccessResponse } from "@/types";
import { VideoInfo } from "@/types/tiktok";
import axios, { AxiosResponse, AxiosError } from "axios";

export const isJsonResponse = (response: Response) => {
  const contentType = response.headers.get("content-type");
  return contentType && contentType.includes("application/json");
};

export const makeErrorResponse = (message = "Something went wrong.") => {
  const response: ErrorResponse = {
    status: "error",
    message,
  };
  return response;
};

export const makeHttpRequest = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET",
  data: any = null,
  headers: { [key: string]: string } = {},
  timeout: number = 0
): Promise<APIResponse<T>> => {
  try {
    const response: AxiosResponse = await axios({
      url: url,
      method: method || "GET",
      data: data,
      headers: headers,
      timeout: timeout,
    });

    const successResponse = response.data as SuccessResponse<T>;
    return successResponse;
  } catch (error: any) {
    const axiosError: AxiosError = error;
    if (axiosError.response) {
      const response = axiosError.response.data as ErrorResponse;
      return makeErrorResponse(response.message);
    } else if (axiosError.request) {
      console.error("Request Error:", axiosError.request);
      return makeErrorResponse("Request timeout, please try again.");
    } else {
      console.error("Error:", axiosError.message);
      return makeErrorResponse("Something went wrong, please try again.");
    }
  }
};
