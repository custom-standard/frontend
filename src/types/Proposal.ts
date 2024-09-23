import { DateTime } from "./DateTime";
import { File } from "./File";
import { Order, SimpleOrder } from "./Order";
import { User } from "./User";

export interface Proposal {
  proposalId: number;
  order: SimpleOrder;
  sender: User;
  price: number;
  date: DateTime;
  message?: string;
  images: File[];
  status: string;
}

export interface ProposalCreateRequest {
  orderId: number;
  price: number;
  date: DateTime;
  message: string;
}
