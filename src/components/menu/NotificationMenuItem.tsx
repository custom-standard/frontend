import React from "react";
import { Notification } from "../../types/Notification";
import { toFormattedDate } from "../../utils/dateUtils";
import CustomAvatar from "../user/CustomAvatar";

interface Props {
  notification: Notification;
}

export default function NotificationMenuItem({ notification }: Props) {
  const getOrderStatusMessage = (index: number): string => {
    switch (index) {
      case -1:
        return "거절되었습니다.";
      case 0:
        return "전달되었습니다.";
      case 1:
        return "수락되었습니다.";
      case 2:
        return "확정되었습니다.";
      case 3:
        return "완료되었습니다";
      case 4:
        return "취소되었습니다.";
      default:
        return "상태를 알 수 없습니다.";
    }
  };

  let thumbnail: string | undefined;

  if (notification.type === "order") {
    thumbnail = notification.order.post.thumbnail?.fileUrl;
  } else if (notification.type === "propose") {
    thumbnail = notification.propose.order.post.thumbnail?.fileUrl;
  } else if (notification.type === "review") {
    thumbnail = notification.review.order.post.thumbnail?.fileUrl;
  }

  return (
    <div className="flex flex-col items px-4 py-2 hover:bg-amber-400/10 cursor-pointer transition-all">
      {notification.type === "chat" ? (
        <div className="flex px-2 pt-1 items-center gap-4">
          <CustomAvatar user={notification.chat.other} size={48} />
          <div className="flex flex-col flex-1 overflow-hidden">
            <p className="font-medium text-md">
              {notification.chat.other.name}
            </p>
            <p className=" font-light text-sm overflow-hidden text-nowrap text-ellipsis">
              {notification.chat.message}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex px-2 pt-1 items-center gap-4">
          {thumbnail && (
            <img
              className="w-[60px] h-[60px] object-cover rounded-[4px]"
              src={thumbnail}
            />
          )}
          {notification.type === "order" && (
            <div className="flex flex-col">
              <p className="font-semibold text-md">
                {notification.order.status.index === -1
                  ? "주문이 거절되었습니다."
                  : notification.order.status.index === 4
                  ? "주문이 취소되었습니다."
                  : `주문이 ${notification.order.status.description}입니다.`}
              </p>
              <p className="font-light leading-5 text-sm">
                {notification.order.responder.name}님에게 요청한 "
                {notification.order.post.title}" 제작 주문이{" "}
                {getOrderStatusMessage(notification.order.status.index)}
              </p>
            </div>
          )}
          {notification.type === "propose" && (
            <div className="flex flex-col">
              <p className="font-semibold text-md">제안서가 도착했습니다.</p>
              <p className="font-light leading-5 text-sm">
                {notification.propose.order.post.title}에 대한{" "}
                {notification.propose.sender.name}님의 제안서가 도착했습니다.
              </p>
            </div>
          )}
          {notification.type === "review" && (
            <div className="flex flex-col">
              <p className="font-semibold text-md">리뷰가 도착하였습니다.</p>
              <p className="font-light leading-5 text-sm">
                {notification.review.order.post.title}에 대한{" "}
                {notification.review.writer.name}님의 리뷰가 작성되었습니다.
              </p>
            </div>
          )}
        </div>
      )}
      <p className="ml-auto text-xs text-black/40 transition-all">
        {toFormattedDate(notification.time)}
      </p>
    </div>
  );
}
