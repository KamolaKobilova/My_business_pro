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
  // const [isDrawerVisible, setDrawerVisible] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  const onChange = (newDate: any) => {
    setDate(newDate);
  };

  // const showDrawer = () => {
  //   setDrawerVisible(true);
  // };

  // const onCloseDrawer = () => {
  //   setDrawerVisible(false);
  // };

  // const handleChange = (value: any) => {
  //   setSelectedOption(value);
  // };

  return (
    <>
      <FullPageCalendar>
        <StyledCalendar
          className="custom-calendar"
          onChange={onChange}
          value={date}
          tileContent={({ date }) => (
            <Button type="text" icon={<PlusOutlined />} />
          )}
        />
      </FullPageCalendar>

      {/* <Drawer
        title="New meeting "
        placement="right"
        closable={false}
        onClose={onCloseDrawer}
        visible={isDrawerVisible}
        width="50%"
      >
        <InputBlock>
          <div className="name">
            <p>Work Space</p>
            <p>Service</p>
            <p>Appoint staff</p>
            <p>Date & time</p>
            <p>Client</p>
            <p>Notes</p>
          </div>
          <div className="input">
            <CustomSelect>
              <Select
                placeholder="Выберите вариант"
                onChange={handleChange}
                value={selectedOption}
              >
                <Option value="Вариант 1">Вариант 1</Option>
                <Option value="Вариант 2">Вариант 2</Option>
                <Option value="Вариант 3">Вариант 3</Option>
              </Select>
            </CustomSelect>
            <CustomSelect>
              <Select
                placeholder="Выберите вариант"
                onChange={handleChange}
                value={selectedOption}
              >
                <Option value="Вариант 1">Вариант 1</Option>
                <Option value="Вариант 5">Вариант 2</Option>
                <Option value="Вариант 3">Вариант 3</Option>
              </Select>
            </CustomSelect>
            <CustomSelect>
              <Select
                placeholder="Выберите вариант"
                onChange={handleChange}
                value={selectedOption}
              >
                <Option value="Вариант 1">Вариант 1</Option>
                <Option value="Вариант 3">Вариант 2</Option>
                <Option value="Вариант 3">Вариант 3</Option>
              </Select>
            </CustomSelect>
          </div>
        </InputBlock>
      </Drawer> */}
    </>
  );
};
