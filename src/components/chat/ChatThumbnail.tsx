import React from "react";
import { Chat } from "../../types/Chat";
import Profile from "../user/Profile";
import { toFormattedDateAgo } from "../../utils/dateUtils";

interface Props {
  chat: Chat;
}

export default function ChatThumbnail({ chat }: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center pt-1">
        <Profile size="md" user={chat.other} link={false} />
        <p className="text-sm text-black/50">{toFormattedDateAgo(chat.time)}</p>
      </div>
      <p className="p-2">{chat.message}</p>
    </div>
  );
}
