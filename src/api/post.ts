import { api } from ".";
import { DetailPost } from "../types/Post";
import { PostUpdateRequest } from "../types/Post";
import { Post, PostReadRequest } from "../types/Post";
import { ENDPOINT } from "./url";
import { BASE_URL } from "./url";

const SIZE = 10;

export const readPostAll = async (data: PostReadRequest) => {
  const response = await api.post(BASE_URL + ENDPOINT.POST_ALL, data);
  return response.data.data as Post;
};

export const readPostDetail = async () => {};

export const createPost = async (formData: FormData) => {
  const response = await api.post(BASE_URL + ENDPOINT.POST, formData);
  return response.data.data as DetailPost;
};

export const updatePost = async (data: PostUpdateRequest) => {
  const response = await api.patch(BASE_URL + ENDPOINT.POST, data);
  return response.data.data as DetailPost;
};

export const deletePost = async (postId: number) => {
  api.delete(BASE_URL + `${ENDPOINT.POST}?postId=${postId}`);
};
