import { Order } from "./Order";
import { User } from "./User";

export interface Review {
  reviewId: number;
  order: Order;
  writer: User;
  rating: number;
  description: string;
  images: string[];
}
