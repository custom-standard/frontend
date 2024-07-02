import React from "react";
import OrderStatusBar from "./OrderStatusBar";
import { Order } from "../../types/Order";

interface Props {
  order: Order;
}

export default function OrderBannerItem({ order }: Props) {
  return (
    <div className="flex gap-4 p-8 border border-stone-700/30 rounded-2xl">
      {/* image slider */}
      <div className="w-2/5">image slider</div>
      <div className="flex-grow flex flex-col items-center">
        <OrderStatusBar status={order.status}></OrderStatusBar>
        {(order.post.type === "구매" && !order.isRequest) ||
        (order.post.type === "판매" && order.isRequest) ? (
          <>
            <div>
              <b>{order.post.title}</b>에 대한 나의 <b>{order.post.type}</b>{" "}
              요청이
              <br />
              <b className="text-red-600/75">{order.status.description}</b>에
              있습니다.
            </div>
            <div className="flex gap-2">
              <button className="text-white text-sm bg-red-700/60 px-4 py-2 rounded-[6px] hover:bg-red-700/65 transition-all">
                자세히 보기
              </button>
              <button className="text-red-700 text-sm border border-red-700/60 px-4 py-2 rounded-[6px] hover:bg-red-700/[0.05] transition-all">
                채팅하기
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-lg text-center py-6">
              <b>{order.post.title}</b>에 대한 상품 제작이
              <br />
              <b className="text-red-600/75">{order.status.description}</b>에
              있습니다.
            </div>
            <div className="flex gap-2">
              <button className="text-white text-sm bg-red-700/60 px-4 py-2 rounded-[6px] hover:bg-red-700/65 transition-all">
                진행 상황 업데이트
              </button>
              <button className="text-red-700 text-sm border border-red-700/60 px-4 py-2 rounded-[6px] hover:bg-red-700/[0.05] transition-all">
                채팅하기
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
