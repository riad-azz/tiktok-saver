import { APIResponse, ErrorResponse } from "@/types";

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

type ApiRequestArgs = {
  url: string;
  fetchError?: string;
  responseError?: string;
};

export const makeApiRequest = async <T>({
  url,
  fetchError = "Could not connect to the server.",
  responseError = "Bad response from the server.",
}: ApiRequestArgs): Promise<APIResponse<T>> => {
  let response;

  try {
    response = await fetch(url);
  } catch (error: any) {
    console.log(error);
    return makeErrorResponse(fetchError);
  }

  const isJson = isJsonResponse(response);
  if (!isJson) {
    return makeErrorResponse(responseError);
  }

  const apiResponse: APIResponse<T> = await response.json();
  return apiResponse;
};
