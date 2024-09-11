import { Order, SimpleOrder } from "./Order";
import { User } from "./User";

export interface Review {
  reviewId: number;
  order: SimpleOrder;
  writer: User;
  rating: number;
  description: string;
  images: string[];
}
