import React, { useState } from "react";
import Calendar from "react-calendar";
import { FullPageCalendar } from "./StylesForCalendar";
export const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate: any) => {
    setDate(newDate);
  };

  return (
    <>
      <FullPageCalendar>
        <Calendar
          className="custom-calendar"
          onChange={onChange}
          value={date}
        />
      </FullPageCalendar>
    </>
  );
};
