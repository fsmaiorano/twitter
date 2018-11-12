import axios, { AxiosRequestConfig, AxiosPromise } from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api/"
});

export default api;
