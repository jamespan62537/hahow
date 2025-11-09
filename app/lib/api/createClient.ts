import axios from "axios";
import { errorHandler } from "./api";

function createClient(config = {}) {
  const defaultConfig = {
    baseURL: import.meta.env.VITE_API_URI,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    validateStatus: (status: number) => status >= 200 && status < 300,
    timeout: 5000,
  };

  const API = axios.create({ ...defaultConfig, ...config });

  API.interceptors.request.use(async (config) => {
    return config;
  });

  API.interceptors.response.use(
    async (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(errorHandler(error));
    }
  );

  return API;
}

const API = createClient();

export default API;
