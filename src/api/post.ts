import { api, authApi } from ".";
import { DetailPost, PostCreateRequest } from "../types/Post";
import { PostUpdateRequest } from "../types/Post";
import { Post, PostReadRequest } from "../types/Post";
import { ENDPOINT } from "./url";
import { BASE_URL } from "./url";

export const readPostAll = async (data: PostReadRequest) => {
  const response = await authApi().post(BASE_URL + ENDPOINT.POST_ALL, data);
  return response.data.data as Post[];
};

export const readPostDetail = async () => {};

export const createPost = async (data: PostCreateRequest, files: File[]) => {
  const formData = new FormData();
  formData.append("request", new Blob([JSON.stringify(data)]));

  files.forEach((file) => {
    formData.append("files", file);
  });

  const response = await authApi().post(BASE_URL + ENDPOINT.POST, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data.data as DetailPost;
};

export const updatePost = async (data: PostUpdateRequest) => {
  const response = await authApi().patch(BASE_URL + ENDPOINT.POST, data);
  return response.data.data as DetailPost;
};

export const deletePost = async (postId: number) => {
  authApi().delete(BASE_URL + `${ENDPOINT.POST}?postId=${postId}`);
};
