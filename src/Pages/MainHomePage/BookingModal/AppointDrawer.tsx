import React, { useState } from 'react';
import { Select, DatePicker, TimePicker, Button, Modal, List, Input } from 'antd';
import TodoList from './TodoModal'; // Import the TodoList component
import TodoModal from './TodoModal';
import { CheckSquareOutlined, FieldTimeOutlined, BellOutlined, AppstoreOutlined } from '@ant-design/icons';
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
  const [isTodoListVisible, setIsTodoListVisible] = useState<boolean>(false); // State for TodoList visibility

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

  const handleOpenTodoList = () => {
    setIsTodoListVisible(true); // Set the state to show TodoList modal
  };

  const handleCloseTodoList = () => {
    setIsTodoListVisible(false); // Set the state to hide TodoList modal
  };
  //////////////
  const [showTodoList, setShowTodoList] = useState(false);
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [nextId, setNextId] = useState(1);

  const handleInputClick = () => {
    setShowTodoList(true);
  };

  const handleTaskSubmit = () => {
    if (nameValue.trim() !== '' && emailValue.trim() !== '' && phoneValue.trim() !== '') {
      const newItem: TodoItem = {
        id: nextId,
        name: nameValue,
        email: emailValue,
        phone: phoneValue
      };
      setTodoItems([...todoItems, newItem]);
      setNameValue('');
      setEmailValue('');
      setPhoneValue('');
      setNextId(nextId + 1);
    }
  };

  const handleClearList = () => {
    setTodoItems([]);
  };

  const handleSaveList = () => {
    // Your save logic here
    console.log("Saving the to-do list:", todoItems);
  };

  return (
    <div className="input_forms">
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
              style={{ width: '150px' }}
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>

          <div className="inlinePicker">
            <h3>Time Input:</h3>
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
