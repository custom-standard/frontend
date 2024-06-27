import React from "react";
import { FaUserCircle, FaEnvelopeOpenText, FaHeart } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import ProfileMenuItem from "./ProfileMenuItem";

export default function ProfileMenu() {
  return (
    <div className="absolute top-[4.5em] right-[50px] flex flex-col w-[260px] rounded-[6px] bg-white border border-stone-300 shadow-xl">
      <ProfileMenuItem icon={<FaUserCircle />} text="내 정보" line={true} />
      <ProfileMenuItem
        icon={<FaEnvelopeOpenText />}
        text="나의 요청"
        line={true}
      />
      <ProfileMenuItem icon={<FaUserCircle />} text="나의 작품" line={true} />
      <ProfileMenuItem
        icon={<FaHeart />}
        text="좋아하는 아티스트"
        line={true}
      />
      <ProfileMenuItem icon={<FaGear />} text="설정" />
      <hr />
      <button className="ml-auto p-1 pt-2 text-sm text-black/50 hover:text-black/75 transition-all pb-2 pr-4">
        로그아웃
      </button>
    </div>
  );
}
