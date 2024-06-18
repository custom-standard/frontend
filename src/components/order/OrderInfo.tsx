import React from "react";
import { Order } from "../../types/Order";
import IconText from "../common/IconText";
import {
  FaRegWindowMaximize,
  FaRegCalendarAlt,
  FaRegUserCircle,
  FaWonSign,
} from "react-icons/fa";
import { DateTime } from "../../types/DateTime";

interface Props {
  order: Order;
}

export default function OrderInfo({ order }: Props) {
  const iconColor = "#D9A2A2";
  const textColor = "#000000";

  const now = new Date();
  const daysLeft = Math.ceil(
    (order.date.date.getTime() - now.getTime()) / (1000 * 3600 * 24) - 1
  );

  // TODO: 이벤트 작성
  const onClickPost = () => {};
  const onClickProfile = () => {};

  const toFormattedDate = (dateTime: DateTime) => {
    const date = dateTime.date;
    const time = dateTime.time;
    const year =
      now.getFullYear() === date.getFullYear()
        ? ""
        : `${date.getFullYear()}년 `;
    const month = `${date.getMonth() + 1}월 `;
    const day = `${date.getDate()}일 `;
    const hours = time.getHours();
    const minute = time.getMinutes().toString().padStart(2, "0");

    return `${year} ${month} ${day} ${hours}:${minute}`;
  };

  return (
    <div className="flex flex-col gap-2">
      <IconText
        iconColor={iconColor}
        textColor={textColor}
        icon={<FaRegWindowMaximize />}
        textBold={order.post.title}
        text="에 대한 제작 요청"
        event={onClickPost}
      />
      <IconText
        iconColor={iconColor}
        textColor={textColor}
        icon={<FaRegUserCircle />}
        textBold={order.isRequest ? order.responder.name : order.requester.name}
        text="님과 함께"
        event={onClickProfile}
      />
      <IconText
        iconColor={iconColor}
        textColor={textColor}
        icon={<FaWonSign />}
        textBold={order.price.toLocaleString()}
        text="원"
      />
      <div className="flex justify-between">
        <IconText
          iconColor={iconColor}
          textColor={textColor}
          icon={<FaRegCalendarAlt />}
          textBold={toFormattedDate(order.date)}
          event={onClickPost}
        />
        <div className="bg-[#CE4D4D] text-white text-xs px-2 py-1 rounded-[6px] whitespace-nowrap h-6">
          {daysLeft >= 0 ? `${daysLeft}일 남음` : `기간 지남`}
        </div>
      </div>
    </div>
  );
}
