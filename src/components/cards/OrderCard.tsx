import React from "react";
import OrderInfo from "../order/OrderInfo";
import OrderStatus from "../order/OrderStatus";
import ChatThumbnail from "../chat/ChatThumbnail";

export default function OrderCard() {
  const fetchOrder = () => {};

  const fetchCurrentChat = () => {};

  const category = {
    categoryId: 1,
    name: "식품",
    description: "음식 관련 카테고리",
  };

  const date = {
    date: new Date("2024-06-18T14:00:00+09:00"),
    time: new Date("2024-06-18T14:00:00+09:00"),
  };

  const user = {
    uuid: "test UUID",
    provider: "KAKAO",
    email: "test@email.com",
    name: "테스트",
    profileImageUrl:
      "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F27738433597DCB1312",
  };

  const post = {
    postId: 1,
    category: category,
    type: "구매",
    title: "테스트 제목",
    image: [],
    dates: [date],
    delivery: false,
    minPrice: 30000,
    maxPrice: 100000,
    writer: user,
  };

  const order = {
    orderId: 1,
    post: post,
    requester: user,
    responder: user,
    price: 10000,
    date: date,
    // TODO: 상태 업데이트
    status: "wating",
    isRequest: true,
  };

  const chat = {
    other: user,
    message: "hello",
    time: new Date("2024-06-14T14:00:00+09:00"),
    read: true,
  };

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
