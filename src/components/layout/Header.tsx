import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/image/logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Profile from "../user/Profile";
import { FaBell } from "react-icons/fa";
import { sampleUser } from "../../sampleData";
import ProfileMenu from "../menu/ProfileMenu";
import NotificationMenu from "../menu/NotificationMenu";

export default function Header() {
  const navigate = useNavigate();

  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openNotificationMenu, setOpenNotificationMenu] = useState(false);

  const profileMenuRef = useRef<HTMLDivElement>(null);
  const notificationMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutSide = (e: MouseEvent) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(e.target as Node)
    )
      setOpenProfileMenu(false);
    if (
      notificationMenuRef.current &&
      !notificationMenuRef.current.contains(e.target as Node)
    ) {
      setOpenNotificationMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    <div className="flex top-0 w-full drop-shadow px-10 py-4 bg-white justify-center z-auto">
      <div className="flex w-full  justify-between items-center">
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
          <div ref={profileMenuRef}>
            <div
              onClick={() => setOpenProfileMenu(!openProfileMenu)}
              className="hover:cursor-pointer"
            >
              <Profile size="md" user={sampleUser} link={false} />
            </div>
            {openProfileMenu && <ProfileMenu />}
          </div>
          <div ref={notificationMenuRef} className="m-auto">
            <div onClick={() => setOpenNotificationMenu(!openNotificationMenu)}>
              <FaBell className="hover:cursor-pointer" />
              <div className="relative right-3.5 top-0 rounded-md bg-red-500"></div>
            </div>
            {openNotificationMenu && <NotificationMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}
