import { DateTime } from "./DateTime";
import { File } from "./File";
import { OrderStatus } from "./OrderStatus";
import { Post, SimplePost } from "./Post";
import { User } from "./User";

export interface Order {
  orderId: number;
  post: SimplePost;
  requester: User;
  responder: User;
  requestMessage: string;
  images: File[];
  price: number;
  date: DateTime[];
  // TODO: 상태 업데이트
  status: OrderStatus;
  isRequest: boolean;
}

export interface SimpleOrder {
  orderId: number;
  post: SimplePost;
  price: number;
  requester: User;
  responder: User;
}
