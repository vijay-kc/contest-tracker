import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_baseURL, // Backend URL
  withCredentials: true, // Ensure cookies (JWT tokens) work properly
});

// Add token to requests (if available)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
