import React from "react";
import { Chat } from "../../types/Chat";
import Profile from "../user/Profile";

interface Props {
  chat: Chat;
}

export default function ChatThumbnail({ chat }: Props) {
  const toFormattedDate = (date: Date) => {
    const now = new Date();
    const givenDate = new Date(date);

    const diffInMilliseconds = now.getTime() - givenDate.getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths =
      now.getMonth() -
      givenDate.getMonth() +
      12 * (now.getFullYear() - givenDate.getFullYear());
    const diffInYears = now.getFullYear() - givenDate.getFullYear();

    if (diffInDays < 1) {
      return `${givenDate.getHours()}:${givenDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    } else if (diffInDays <= 30) {
      return `${diffInDays}일 전`;
    } else if (diffInMonths < 12) {
      return `${diffInMonths}달 전`;
    } else {
      return `${diffInYears}년 전`;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center pt-1">
        <Profile size="md" user={chat.other} link={false} />
        <p className="text-sm text-black/50">{toFormattedDate(chat.time)}</p>
      </div>
      <p className="p-2">{chat.message}</p>
    </div>
  );
}
