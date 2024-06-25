import { DateTime } from "./DateTime";
import { OrderStatus } from "./OrderStatus";
import { Post } from "./Post";
import { User } from "./User";

export interface Order {
  orderId: number;
  post: Post;
  requester: User;
  responder: User;
  price: number;
  date: DateTime;
  // TODO: 상태 업데이트
  status: OrderStatus;
  isRequest: boolean;
}
