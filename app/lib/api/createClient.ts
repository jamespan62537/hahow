import axios from "axios";

function createClient(config = {}) {
  const defaultConfig = {
    baseURL: process.env.VITE_API_URI,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    validateStatus: (status: number) => status >= 200 && status <= 500,
  };

  const API = axios.create({ ...defaultConfig, ...config });

  API.interceptors.request.use(async (config) => {
    return config;
  });

  API.interceptors.response.use(async (response) => {
    return response;
  });

  return API;
}

const API = createClient();

export default API;
