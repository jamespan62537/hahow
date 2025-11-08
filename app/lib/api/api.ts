import axios from "axios";

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
}

/**
 * @description Handles API errors
 * @param error - The error to handle
 * @returns - The ApiError instance
 */
export const errorHandler = (error: unknown) => {
  if (typeof error === "object" && error !== null) {
    const axiosError = error;

    // Maybe we can also send the errors below to server, sentry or datadog...etc
    if (axios.isAxiosError(axiosError)) {
      if (axiosError.response) {
        const { status, statusText } = axiosError.response;
        return new ApiError(status, statusText);
      }
      if (axiosError.request) {
        return new ApiError(500, "Network error");
      }
    }

    return new ApiError(500, "Unknown error");
  }
};
