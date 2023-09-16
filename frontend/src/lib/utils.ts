import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { APIResponse, ErrorResponse, SuccessResponse } from "@/types";

import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const isJsonResponse = (response: Response) => {
  const contentType = response.headers.get("content-type");
  return contentType && contentType.includes("application/json");
};

export const isVideoResponse = (response: Response) => {
  const contentType = response.headers.get("content-type");
  return contentType && contentType.includes("video");
};

export const makeSuccessResponse = <T>(data: any) => {
  const response: SuccessResponse<T> = {
    status: "success",
    data,
  };
  return response;
};

export const makeErrorResponse = (
  message: string = "Something went wrong."
) => {
  const response: ErrorResponse = {
    status: "error",
    message,
  };
  return response;
};

export const makeHttpRequest = async <T>({
  ...args
}: AxiosRequestConfig): Promise<APIResponse<T>> => {
  try {
    const response: AxiosResponse = await axios(args);
    if (response.data.status === "success") {
      return response.data as SuccessResponse<T>;
    } else {
      return makeSuccessResponse<T>(response.data);
    }
  } catch (error: any) {
    const axiosError: AxiosError = error;
    if (axiosError.response) {
      const response = axiosError.response.data as ErrorResponse;
      const message = response.message ?? axiosError.message;
      return makeErrorResponse(message);
    } else if (axiosError.request) {
      console.error("Request Error:", axiosError.request);
      return makeErrorResponse("Request timeout, please try again.");
    } else {
      console.error("Error:", axiosError.message);
      return makeErrorResponse("Something went wrong, please try again.");
    }
  }
};
