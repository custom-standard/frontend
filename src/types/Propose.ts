import { DateTime } from "./DateTime";
import { Order, SimpleOrder } from "./Order";
import { User } from "./User";

export interface Propose {
  sender: User;
  receiver: User;
  order: SimpleOrder;
  date: DateTime;
  price: number;
}
