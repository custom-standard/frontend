import React, { useState } from "react";
import { Notification } from "../../types/Notification";
import { Link } from "react-router-dom";
import NotificationMenuItem from "./NotificationMenuItem";
import { sampleNotifications } from "../../sampleData";

export default function NotificationMenu() {
  const [notifications, setNotifications] =
    useState<Notification[]>(sampleNotifications);
  const fetchNotifications = () => {};

  return (
    <div className="absolute top-[4.5em] right-[30px] flex flex-col w-[400px] bg-white border border-stone-300 shadow-sm min-h-[200px] overflow-y-scroll scrollbar-hide">
      <div className="grow flex">
        {notifications.length === 0 ? (
          <div className="m-auto flex gap-2 text-black/50 items-center">
            <p className="text-black/50">알람이 없습니다.</p>
          </div>
        ) : (
          <>
            {notifications.map((notification, index) => (
              <NotificationMenuItem key={index} notification={notification} />
            ))}
          </>
        )}
      </div>
      <hr />
      <Link
        className="ml-auto p-1 pt-2 text-sm text-black/50 hover:text-black/75 transition-all pb-2 pr-4"
        to="/my/notification"
      >
        더보기
      </Link>
    </div>
  );
}
