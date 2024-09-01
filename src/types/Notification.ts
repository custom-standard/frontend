import { Chat } from "./Chat";
import { Order } from "./Order";
import { OrderStatus } from "./OrderStatus";
import { Post } from "./Post";
import { Proposal } from "./Proposal";
import { Review } from "./Review";
import { User } from "./User";

export interface OrderNotification {
  type: "order";
  order: Order;
  time: Date;
}

export interface ProposeNotification {
  type: "propose";
  propose: Proposal;
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
  time: Date;
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
