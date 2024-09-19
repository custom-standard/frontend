import axios from "axios";
import { BASE_URL } from "./url";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApi = () => {
  const accessToken = localStorage.getItem("accessToken");

  return axios.create({
    ...api.defaults,
    headers: {
      ...api.defaults.headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  });
};
