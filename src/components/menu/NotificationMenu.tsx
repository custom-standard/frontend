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
    <div className="absolute top-[4.5em] right-[30px] flex flex-col w-[400px] min-h-[200px] max-h-[360px] bg-white border border-stone-300 shadow-sm">
      <div className="grow flex flex-col overflow-y-scroll scrollbar-hide">
        {notifications.length === 0 ? (
          <div className="m-auto flex gap-2 text-black/50 items-center">
            <p className="text-black/50">알람이 없습니다.</p>
          </div>
        ) : (
          <>
            {notifications.map((notification, index) => (
              <React.Fragment key={index}>
                <NotificationMenuItem notification={notification} />
                <hr />
              </React.Fragment>
            ))}
          </>
        )}
      </div>
      <hr className="m-0" />
      <div className="flex justify-end p-2">
        <Link
          className="text-sm text-black/50 hover:text-black/75 transition-all"
          to="/my/notification"
        >
          더보기
        </Link>
      </div>
    </div>
  );
}
