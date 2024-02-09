import React, { useState } from 'react';
import { Select, DatePicker, TimePicker } from 'antd';
import TodoModal from './TodoModal';
import './style.css';

const { Option } = Select;
interface TodoItem {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const AppointDrawer: React.FC = () => {
  const [firstSelectValue, setFirstSelectValue] = useState<any>(undefined);
  const [secondSelectValue, setSecondSelectValue] = useState<any>(undefined);
  const [thirdSelectValue, setThirdSelectValue] = useState<any>(undefined);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<any>(null);
 
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: any) => {
    setSelectedTime(time);
  };

  const handleFirstSelectChange = (value: any) => {
    setFirstSelectValue(value);
  };

  const handleSecondSelectChange = (value: any) => {
    setSecondSelectValue(value);
  };

  const handleThirdSelectChange = (value: any) => {
    setThirdSelectValue(value);
  };

  

  return (
    <div className="input_forms" >
      <div className='input_items' style={{display:"flex", alignItems:"center", marginTop:"30px"}}>
        <p style={{fontSize:"16px"}}>Workspace</p>
        <Select
         style={{ width: "342px", height:"40px",marginLeft:"70px"}}
          value={firstSelectValue}
          onChange={handleFirstSelectChange}
        >
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      </div>

      <div className='input_items'  style={{display:"flex", alignItems:"center", marginBottom:"24px"}}>
        <p style={{fontSize:"16px"}}>Service</p>
        <Select
           style={{ width: "342px", height:"40px",marginLeft:"95px"}}
          value={secondSelectValue}
          onChange={handleSecondSelectChange}
        >
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      </div>

      <div className='input_items' style={{display:"flex", alignItems:"center", marginBottom:"24px"}}>
        <p style={{fontSize:"16px"}}>Assign Staff</p>
        <Select
           style={{ width: "342px", height:"40px", marginBottom:"24px",marginLeft:"70px"}}
          value={thirdSelectValue}
          onChange={handleThirdSelectChange}
        >
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      </div>

      <div>
        

        <div className="inlinePickerContainer">
          <div  className="inlinePicker input_items" style={{display:"flex", alignItems:"center", marginBottom:"24px"}}>
            <p>Date Input:</p>
            <DatePicker
              style={{ width: '150px' }}
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>

          <div className="inlinePicker input_items" style={{display:"flex", alignItems:"center", marginBottom:"24px"}}>
            <p>Time Input:</p>
            <TimePicker
              style={{ width: '150px' }}
              value={selectedTime}
              onChange={handleTimeChange}
            />
          </div>
        </div>

       
      </div>

    <TodoModal/>
    </div>
  );
};

export default AppointDrawer;
