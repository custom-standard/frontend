import { User } from "./User";

export interface Chat {
  other: User;
  message: string;
  time: Date;
  read: boolean;
}
