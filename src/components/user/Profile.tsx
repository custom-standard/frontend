import React from "react";
import { BaseUser } from "../../types/User";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useNavigate } from "react-router-dom";

interface Props {
  size: "sm" | "md" | "lg";
  user: BaseUser;
  link: boolean;
}

export default function Profile({ size, user, link }: Props) {
  const navigate = useNavigate();

  const wh = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const onClickProfile = () => {
    link && navigate(`${user.uuid}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Avatar className={`${wh[size]} cursor-pointer`} onClick={onClickProfile}>
        <AvatarImage src={user.profileImageUrl} />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <p className={`text-${size}`}>
        <b className="cursor-pointer font-semibold" onClick={onClickProfile}>
          {user.name}{" "}
        </b>
        님
      </p>
    </div>
  );
}
