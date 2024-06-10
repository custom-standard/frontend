import React from "react";
import { User } from "../../types/User";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface Props {
  size: "sm" | "md" | "lg";
  user: User;
}

export default function Profile({ size, user }: Props) {
  var wh = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <div className="flex items-center gap-2">
      <Avatar className={`${wh[size]}`}>
        <AvatarImage src={user.profileImageUrl} />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className={`flex gap-1 text-${size}`}>
        <p className="flex font-bold">{user.name}</p>님
      </div>
    </div>
  );
}
