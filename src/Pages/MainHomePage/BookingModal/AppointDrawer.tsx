import React, {useState} from 'react';
import {  Input, Select,DatePicker, TimePicker } from 'antd';
import { CheckSquareOutlined, FieldTimeOutlined, BellOutlined, AppstoreOutlined } from '@ant-design/icons';
import './style.css'

function AppointDrawer() {

    const { Option } = Select;

    const [firstSelectValue, setFirstSelectValue] = useState(undefined);
  const [secondSelectValue, setSecondSelectValue] = useState(undefined);
  const [thirdSelectValue, setThirdSelectValue] = useState(undefined);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date:any) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time:any) => {
    setSelectedTime(time);
  };

  const handleFirstSelectChange = (value:any) => {
    setFirstSelectValue(value);
  };

  const handleSecondSelectChange = (value:any) => {
    setSecondSelectValue(value);
  };

  const handleThirdSelectChange = (value:any) => {
    setThirdSelectValue(value);
  };
  
   




  return (
      
    <div className='input_forms'>
    <div>
     <p>Workspace</p>
      <Select
        style={{ width: 200 }}
        value={firstSelectValue}
        onChange={handleFirstSelectChange}
      >
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </div>
    
    <div>
      <p>Service</p>
      <Select
        style={{ width: 200 }}
        value={secondSelectValue}
        onChange={handleSecondSelectChange}
      >
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </div>
    
    <div>
      <p>Assign Items</p>
      <Select
       
        style={{ width: 200 }}
        value={thirdSelectValue}
        onChange={handleThirdSelectChange}
      >
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </div>
    <div>
      <h2>Date and Time Input Examples</h2>
      
      <div className="inlinePickerContainer">
        <div className="inlinePicker">
          <h3>Date Input:</h3>
          <DatePicker
             style={{width:"150px"}}
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        
        <div className="inlinePicker">
          <h3>Time Input:</h3>
          <TimePicker
          style={{width:"150px"}}
            value={selectedTime}
            onChange={handleTimeChange}
          />
        </div>
      </div>
    </div>
  </div>


            
  )
}

export default AppointDrawer