import React, { useState } from "react";
import { Calendar } from "../ui/calendar";
import { SelectMultipleEventHandler } from "react-day-picker";
import { getAvailableMonth } from "../../utils/dateUtils";

interface Props {
  allowedDays?: Date[] | undefined;
  days: Date[] | undefined;
  setDays: React.Dispatch<React.SetStateAction<Date[] | undefined>>;
}

/* TODO: 시간 추가 기능 */
export default function SelectDaysCalendar({
  allowedDays,
  days,
  setDays,
}: Props) {
  const initialMonth = allowedDays ? getAvailableMonth(allowedDays) : undefined;

  const setDaysEventHandler: SelectMultipleEventHandler = (
    days,
    selectedDay,
    activeModifiers,
    e
  ) => {
    setDays(days);
  };

  return (
    <Calendar
      mode="multiple"
      selected={days}
      onSelect={setDaysEventHandler}
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
