import React from "react";
import { User } from "../../types/User";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface Props {
  user: User;
  size: number;
}

export default function CustomAvatar({ user, size }: Props) {
  const s = `${size}px`;
  return (
    <Avatar style={{ width: s, height: s }}>
      <AvatarImage src={user.profileImageUrl} />
      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
    </Avatar>
  );
}
