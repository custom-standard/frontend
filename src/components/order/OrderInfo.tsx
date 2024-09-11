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
import { toFormattedDateAgo } from "../../utils/dateUtils";

interface Props {
  order: Order;
}

export default function OrderInfo({ order }: Props) {
  const iconColor = "#D9A2A2";
  const textColor = "#000000";

  const now = new Date();

  const fixedDate = order.date.length === 1 ? order.date[0] : undefined;
  const daysLeft = fixedDate
    ? Math.ceil(
        (fixedDate.date.getTime() - now.getTime()) / (1000 * 3600 * 24) - 1
      )
    : undefined;

  // TODO: 이벤트 작성
  const onClickPost = () => {};
  const onClickProfile = () => {};

  return (
    <div className="flex flex-col gap-2 text-md">
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
      <div className="flex justify-between gap-4">
        <IconText
          iconColor={iconColor}
          textColor={textColor}
          icon={<FaRegCalendarAlt />}
          textBold={
            fixedDate ? toFormattedDateAgo(fixedDate.date) : "일정 조정중"
          }
          event={onClickPost}
        />
        {daysLeft && (
          <div className="bg-[#CE4D4D] text-white text-xs px-2 py-1 rounded-[6px] whitespace-nowrap h-6">
            {daysLeft >= 0 ? `${daysLeft}일 남음` : `기간 지남`}
          </div>
        )}
      </div>
    </div>
  );
}
