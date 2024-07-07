import { Order } from "./Order";
import { User } from "./User";

export interface Propose {
  sender: User;
  receiver: User;
  order: Order;
  // 변경할 사항에 대한 타입 추가
}
