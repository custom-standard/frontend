import React, { useState } from "react";
import { Calendar } from "../ui/calendar";
import { SelectMultipleEventHandler } from "react-day-picker";
import { getAvailableMonth } from "../../utils/dateUtils";

interface Props {
  days: Date[];
}

/* TODO: 시간 추가 기능 */
export default function SelectedCalendar({ days }: Props) {
  const initialMonth = getAvailableMonth(days);

  return (
    <Calendar mode="multiple" selected={days} defaultMonth={initialMonth} />
  );
}
