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
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};

  return api({
    headers: {
      ...headers,
    },
  });
};
