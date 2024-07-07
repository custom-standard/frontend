import { Chat } from "./Chat";
import { Order } from "./Order";
import { OrderStatus } from "./OrderStatus";
import { Post } from "./Post";
import { Propose } from "./Propose";
import { Review } from "./Review";
import { User } from "./User";

export interface OrderNotification {
  type: "order";
  order: Order;
  orderStatus: OrderStatus;
  time: Date;
}

export interface ProposeNotification {
  type: "propose";
  order: Order;
  propose: Propose;
  sender: User;
  time: Date;
}

export interface ReviewNotification {
  type: "review";
  review: Review;
  time: Date;
}

export interface ChatNotification {
  type: "chat";
  chat: Chat;
}

function isOrderNotification(
  notification: Notification
): notification is OrderNotification {
  return notification.type === "order";
}

function isProposeNotification(
  notification: Notification
): notification is ProposeNotification {
  return notification.type === "propose";
}

function isReviewNotification(
  notification: Notification
): notification is ReviewNotification {
  return notification.type === "review";
}

function isChatNotification(
  notification: Notification
): notification is ChatNotification {
  return notification.type === "chat";
}
export type Notification =
  | OrderNotification
  | ProposeNotification
  | ReviewNotification
  | ChatNotification;
