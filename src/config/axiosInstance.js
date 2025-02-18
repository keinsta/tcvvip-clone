import axios from "axios";

// Load API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (Modify requests before they are sent)
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken"); // Example: Getting token from localStorage
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Response Interceptor (Handle responses globally)
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.error("Unauthorized! Redirecting to login...");
//       // You can handle token expiration here, like redirecting to login page
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
