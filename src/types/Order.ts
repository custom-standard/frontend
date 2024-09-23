import { DateTime } from "./DateTime";
import { File } from "./File";
import { Post, SimplePost } from "./Post";
import { User } from "./User";

export enum OrderPosition {
  CLIENT,
  CREATOR,
}

export interface OrderStatus {
  index: number;
  description: string;
}

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

export interface OrderCreateRequest {
  postId: number;
  requestMessage: string;
  price: number;
  dates: DateTime[];
}

export interface OrderReadRequest {
  page: number;
  size: number;
  postId?: number;
  position: OrderPosition;
  status: OrderStatus;
}

export interface OrderUpdateStatusRequest {
  orderId: number;
  forward: boolean;
}

export interface OrderUpdateDataRequest {
  orderId: number;
  proposeId: number;
}
