import React, { useState } from "react";
import {
  FullPageCalendar,
  InputBlock,
  StyledCalendar,
  CustomSelect,
} from "./StylesForCalendar";
import { Drawer, Button, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

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
