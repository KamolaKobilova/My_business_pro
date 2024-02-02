import React, { useState } from "react";
import { FullPageCalendar, StyledCalendar } from "./StylesForCalendar";
export const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate: any) => {
    setDate(newDate);
  };

  return (
    <>
      <FullPageCalendar>
        <StyledCalendar
          className="custom-calendar"
          onChange={onChange}
          value={date}
        />
      </FullPageCalendar>
    </>
  );
};
