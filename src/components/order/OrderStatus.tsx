import React from "react";

interface Props {
  level: number;
}

export default function OrderStatus({ level }: Props) {
  // TODO: 데이터 변경
  const status = ["요청중", "조정중", "진행중", "완료됨"];

  return (
    <div className="flex items-center justify-between">
      {status.map((s, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center gap-1">
            {index == level ? (
              <p className="text-xs">{status[index]}</p>
            ) : (
              <p className="text-xs text-black/75">{status[index]}</p>
            )}
            <div
              className={`w-6 h-6 rounded-full border-8 z-10 ${
                level > index ? "border-red-400" : "border-red-200"
              }`}
            />
          </div>
          {index < status.length - 1 && (
            <div
              className={`relative top-2.5 flex-grow h-2 mx-[-6px] ${
                level - 1 > index ? "bg-red-400" : "bg-red-200"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
