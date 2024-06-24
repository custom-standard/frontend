import React from "react";
import { OrderStatus } from "../../types/OrderStatus";

interface Props {
  status: OrderStatus;
}

export default function OrderStatusBar({ status }: Props) {
  // TODO: 데이터 변경
  const statuses = ["요청중", "조정중", "진행중", "완료됨"];

  return (
    <div className="flex items-center justify-between">
      {statuses.map((s, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center gap-1">
            {index === status.index ? (
              <p className="text-xs">{statuses[index]}</p>
            ) : (
              <p className="text-xs text-black/75">{statuses[index]}</p>
            )}
            <div
              className={`w-6 h-6 rounded-full border-8 z-10 ${
                status.index > index ? "border-red-400" : "border-red-200"
              }`}
            />
          </div>
          {index < statuses.length - 1 && (
            <div
              className={`relative top-2.5 flex-grow h-2 mx-[-6px] ${
                status.index - 1 > index ? "bg-red-400" : "bg-red-200"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
