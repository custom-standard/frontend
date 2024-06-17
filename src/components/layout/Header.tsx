import React from "react";
import logo from "../../assets/image/logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Profile from "../user/Profile";
import { FaBell } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();

  const user = {
    uuid: "test UUID",
    provider: "KAKAO",
    email: "test@email.com",
    name: "테스트",
  };

  return (
    <div className="flex top-0 w-full drop-shadow px-10 py-4 bg-white justify-center z-auto">
      <div className="flex w-full max-w-7xl justify-between items-center">
        <div className="flex items-center gap-10">
          <img
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
            className="h-14 cursor-pointer"
          />
          <div className="flex gap-6">
            <Link to={"/"}>작품</Link>
            <Link to={"/"}>리퀘스트</Link>
            <Link to={"/"}>아티스트</Link>
          </div>
        </div>
        <div className="flex itmes-center gap-2">
          <Profile size="md" user={user} />
          <div className="flex items-center">
            <FaBell />
            <div className="relative right-3.5 top-0 rounded-md bg-red-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
