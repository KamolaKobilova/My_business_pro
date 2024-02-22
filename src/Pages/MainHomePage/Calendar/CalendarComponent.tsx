import React, { useState } from "react";
import {
  FullPageCalendar,
 
  StyledCalendar,
 
} from "./StylesForCalendar";
import { Button} from "antd";
import { PlusOutlined } from "@ant-design/icons";



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
          tileContent={() => (
            <Button type="text" icon={<PlusOutlined />} />
          )}
        />
      </FullPageCalendar>

    </>
  );
};
