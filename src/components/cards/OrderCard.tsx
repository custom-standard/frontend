import React from "react";
import OrderInfo from "../order/OrderInfo";
import OrderStatusBar from "../order/OrderStatusBar";
import ChatThumbnail from "../chat/ChatThumbnail";
import { sampleChat, sampleOrder } from "../../sampleData";

export default function OrderCard() {
  const fetchOrder = () => {};

  const fetchCurrentChat = () => {};

  return (
    <div
      style={{ boxShadow: "0 0 6px 2px rgba(0, 0, 0, 0.04)" }}
      className="flex justify-between gap-8 p-4 border border-black/15"
    >
      <div className="border border-black/10 p-4">
        <OrderInfo order={sampleOrder} />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="px-6 pt-2 pb-6">
          <OrderStatusBar status={sampleOrder.status} />
        </div>
        <div className="px-4 py-2 border border-black/10">
          <ChatThumbnail chat={sampleChat} />
        </div>
      </div>
      <button className="h-8 text-sm text-white bg-red-700/50 px-2 py-1 rounded-[8px]">
        진행 상황 업데이트
      </button>
    </div>
  );
}
