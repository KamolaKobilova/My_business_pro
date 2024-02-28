import React, { useState } from 'react';
import { Select, DatePicker, TimePicker, Input, Button, message, Checkbox } from 'antd';
import TodoModal from './TodoModal';
import { SelectItems, SelectItem } from './BookingStyles';
import './style.css';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const { Option } = Select;

interface TodoItem {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const AppointDrawer = () => {
  const [firstSelectValue, setFirstSelectValue] = useState<TodoItem[]>([]);
  const [secondSelectValue, setSecondSelectValue] = useState<string | undefined>(undefined);
  const [thirdSelectValue, setThirdSelectValue] = useState<string | undefined>(undefined);
  const [selectedDate, setSelectedDate] = useState<any>(null); 
  const [selectedTime, setSelectedTime] = useState<any>(null); 
  const [inputArea, setInputArea] = useState<string>(""); 
  const [isChecked, setIsChecked] = useState(false);

  const handleAddAppointment = () => {
    console.log("First Select Value:", firstSelectValue);
    console.log("Second Select Value:", secondSelectValue);
    console.log("Third Select Value:", thirdSelectValue);
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
    console.log("Input Area Value:", inputArea);
    console.log("Is Checked:", isChecked);
  };

  const handleDateChange = (date: any, dateString: string) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: any, dateString: string) => { 
    setSelectedTime(time);
  };

  const handleFirstSelectChange = (value: TodoItem[]) => { 
    setFirstSelectValue(value);
  };

  const handleSecondSelectChange = (value: string | undefined) => {
    setSecondSelectValue(value);
  };

  const handleThirdSelectChange = (value: string | undefined) => {
    setThirdSelectValue(value);
  };

  const handleCheckboxChange = (e: CheckboxChangeEvent) => { 
    setIsChecked(e.target.checked);
  };

  const handleSendNotification = () => {
    if (isChecked) {
      message.success('Notification sent to customer!');
    } else {
      message.warning('Please check the checkbox to send notification.');
    }
  };

  return (
    <div className="input_forms" >
      <SelectItems>
        <p style={{fontSize:"16px"}}>Workspace</p>
        <Select
          style={{ width: "342px", height:"40px",marginLeft:"70px"}}
          value={firstSelectValue}
          onChange={handleFirstSelectChange}
        >
          <Option value="option1">alicode</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      </SelectItems>

      <SelectItems>
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
      </SelectItems>
      <SelectItems>
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
      </SelectItems>
      <div>
        <div className="inlinePickerContainer">
          <div  className="inlinePicker input_items" style={{display:"flex", alignItems:"center", marginBottom:"24px"}}>
            <p>Date & Time</p>
            <DatePicker
              style={{ width: '178px', height:"40px", marginRight:"10px", marginLeft:"82px" }}
              value={selectedDate}
              onChange={handleDateChange}
            />
            <TimePicker
              style={{ width: '178px', height:"40px" }}
              value={selectedTime}
              onChange={handleTimeChange}
            />
          </div>
        </div>
      </div>
      <SelectItem className='todo'>
        <TodoModal/>
      </SelectItem>
      <div style={{display:"flex", alignItems:"center"}}>
        <p style={{marginLeft:"100px"}}>Notes</p>
        <Input.TextArea 
          value={inputArea}
          placeholder="Appoint description here" 
          autoSize={{ minRows: 3, maxRows: 6 }}
          style={{width:"342px", height:"200px", marginLeft:"100px", marginTop:"12px"}} 
          onChange={(e) => setInputArea(e.target.value)}
        />
      </div>
      <div style={{marginLeft:"235px", marginTop:"20px"}}>
        <Checkbox onChange={handleCheckboxChange}>Send Notification</Checkbox>
        <Button type="primary" onClick={handleSendNotification}>
          Send
        </Button>
      </div>
      <div className='btns'>
        <Button style={{backgroundColor:"#edebeb", borderColor:"#edebeb"}}><p>Cancel</p></Button>
        <Button style={{backgroundColor:"#4F4A7B", color:"white"}} onClick={handleAddAppointment}><p>Add Appointment</p></Button>
      </div>
    </div>
  );
};

export default AppointDrawer;
