import React, { useState } from 'react';
import { Select, DatePicker, TimePicker, Input, Button, message,Checkbox } from 'antd';
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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e:any) => {
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
      
    <div className='input_items'style={{ width: "342px", height:"40px",marginLeft:"40px", display:"flex",alignItems:"center"}}>
     
    <TodoModal/>
    
    </div>
    <div style={{display:"flex", alignItems:"center"}}>
   <p style={{marginLeft:"100px"}}>Notes</p>
    <Input.TextArea 
      placeholder="Appoint description here" 
      autoSize={{ minRows: 3, maxRows: 6 }}
      style={{width:"342px", height:"200px", marginLeft:"100px", marginTop:"12px"}} 
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
    <Button style={{backgroundColor:"#4F4A7B", color:"white"}}><p>Add Appointment</p></Button>
    </div>
    </div>
  );
};

export default AppointDrawer;
