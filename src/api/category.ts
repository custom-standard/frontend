import { api } from ".";
import { Category } from "../types/Category";
import { BASE_URL, ENDPOINT } from "./url";

export const readCategoryAll = async () => {
  const response = await api.get(BASE_URL + ENDPOINT.CATEGORY);
  return response.data as Category[];
};
