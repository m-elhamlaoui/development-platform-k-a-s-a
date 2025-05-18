import axios from "axios";
import AuthService from "./AuthService";

axios.interceptors.request.use(
  (config) => {
    const token = AuthService.getToken();
    console.log("Request URL:", config.url);
    console.log("Token available:", !!token);

    const isLocalApi =
      config.url.startsWith("http://localhost:8080") ||
      config.url.startsWith("http://backend:8080");

    if (token && isLocalApi) {
      config.headers["Authorization"] = `Bearer ${token}`;
      console.log(
        "Authorization header set:",
        config.headers["Authorization"].substring(0, 30) + "..."
      );
    } else if (!isLocalApi) {
      console.log("External API request, no Authorization header set.");
    } else {
      console.warn("No token available for request to:", config.url);
    }

    return config;
  },
  (error) => {
    console.error("Error in request interceptor:", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("Response received from:", response.config.url);
    return response;
  },
  (error) => {
    console.error("Error in response interceptor:", error);
    console.log("Response error status:", error.response?.status);
    console.log("Response error data:", error.response?.data);

    if (error.response && error.response.status === 401) {
      AuthService.logout();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axios;