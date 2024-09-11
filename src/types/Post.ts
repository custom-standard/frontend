import { Category } from "./Category";
import { DateTime } from "./DateTime";
import { File } from "./File";
import { User } from "./User";

export interface Post {
  postId: number;
  category: Category;
  type: string;
  title: string;
  thumbnail?: File;
  dates: DateTime[];
  delivery: boolean;
  place?: string;
  minPrice: number;
  maxPrice: number;
  writer: User;
}

export interface SimplePost {
  postId: number;
  type: string;
  category: Category;
  title: string;
  thumbnail?: File;
  writer: User;
}

export interface DetailPost {
  postId: number;
  category: Category;
  type: string;
  title: string;
  description: string;
  image?: File[];
  dates: DateTime[];
  delivery: boolean;
  place?: string;
  minPrice: number;
  maxPrice: number;
  writer: User;
}
