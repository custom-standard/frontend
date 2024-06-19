import React from "react";
import OrderInfo from "../order/OrderInfo";
import OrderStatus from "../order/OrderStatus";
import ChatThumbnail from "../chat/ChatThumbnail";

export default function OrderCard() {
  const fetchOrder = () => {};

  const fetchCurrentChat = () => {};

  return (
    <div
      style={{ boxShadow: "0 0 6px 2px rgba(0, 0, 0, 0.04)" }}
      className="flex justify-between gap-8 p-4 border border-black/15"
    >
      <div className="border border-black/10 p-4">
        <OrderInfo order={order} />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="px-6 pt-2 pb-6">
          <OrderStatus level={2} />
        </div>
        <div className="px-4 py-2 border border-black/10">
          <ChatThumbnail chat={chat} />
        </div>
      </div>
      <button className="h-8 text-sm text-white bg-red-700/50 px-2 py-1 rounded-[8px]">
        진행 상황 업데이트
      </button>
    </div>
  );
}
