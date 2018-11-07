import axios, { AxiosRequestConfig, AxiosPromise } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"
});

export default api;
