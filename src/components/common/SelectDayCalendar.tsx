import React from "react";
import { Calendar } from "../ui/calendar";
import { getAvailableMonth } from "../../utils/dateUtils";

interface Props {
  allowedDays?: Date[] | undefined;
  day: Date | undefined;
  setDay: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

/* TODO: 시간 추가 기능 */
export default function SelectDayCalendar({ allowedDays, day, setDay }: Props) {
  const initialMonth = allowedDays ? getAvailableMonth(allowedDays) : undefined;

  return (
    <Calendar
      mode="single"
      selected={day}
      onSelect={setDay}
      disabled={
        allowedDays
          ? (date) =>
              !allowedDays.some(
                (allowedDate) =>
                  allowedDate.getDate() === date.getDate() &&
                  allowedDate.getMonth() === date.getMonth() &&
                  allowedDate.getFullYear() === date.getFullYear()
              )
          : undefined
      }
      defaultMonth={initialMonth}
    />
  );
}
