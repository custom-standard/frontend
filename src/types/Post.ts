import { Category } from "./Category";
import { Date } from "./Date";
import { User } from "./User";

export interface Post {
  postId: number;
  category: Category;
  type: string;
  title: string;
  dates: Date[];
  delivery: boolean;
  place?: string;
  minPrice: number;
  maxPrice: number;
  writer: User;
}
