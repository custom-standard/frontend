import { Category } from "./Category";
import { DateTime } from "./DateTime";
import { User } from "./User";

export interface Post {
  postId: number;
  category: Category;
  type: string;
  title: string;
  thumbnail?: string;
  dates: DateTime[];
  delivery: boolean;
  place?: string;
  minPrice: number;
  maxPrice: number;
  writer: User;
}
