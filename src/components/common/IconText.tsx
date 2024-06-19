import React, { ReactElement } from "react";

interface Props {
  iconColor: string;
  textColor: string;
  icon: ReactElement;
  textBold?: string;
  text?: string;
  event?: () => void;
}

export default function IconText({
  iconColor,
  textColor,
  icon,
  textBold,
  text,
  event,
}: Props) {
  return (
    <div className="flex gap-2 items-baseline">
      <div style={{ color: iconColor }}>{icon}</div>
      <div className="flex">
        {textBold && event ? (
          <span
            style={{ color: textColor }}
            className="font-semibold hover:cursor-pointer"
            onClick={event}
          >
            {textBold}
            {text && <span className="font-light">{text}</span>}
          </span>
        ) : (
          <span
            style={{ color: textColor }}
            className="font-bold"
            onClick={event}
          >
            {textBold}
            {text && <span className="font-light">{text}</span>}
          </span>
        )}
      </div>
    </div>
  );
}
