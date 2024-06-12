import { Date } from "./Date";
import { Post } from "./Post";
import { User } from "./User";

export interface Order {
  orderId: number;
  post: Post;
  requester: User;
  responder: User;
  price: number;
  date: Date;
  // TODO: 상태 업데이트
  status: string;
}
