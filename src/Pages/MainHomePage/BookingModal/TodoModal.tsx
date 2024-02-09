import React, { useState } from 'react';
import { Select, Input, Button, Modal } from 'antd';
import profile from '../../../assets/BookingPage/profile.jpeg'

interface TodoItem {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const { Option } = Select;

const CustomSelect: React.FC = () => {
  const [showTodoListModal, setShowTodoListModal] = useState(false);
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [nextId, setNextId] = useState(1);

  const handleAddButtonClick = () => {
    setShowTodoListModal(true);
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
      setShowTodoListModal(false); 
    }
  };

  const handleClearList = () => {
    setTodoItems([]);
  };

  const handleSaveList = () => {
  
    console.log("Todo List:", todoItems);
  };

  return (
    <div>
      <Select
        placeholder="Type and enter"
        style={{ width: 200 }}
      >
        {todoItems.map(item => (
          <Option key={item.id} value={item.name}>
            <div style={{display:"flex", alignItems:"center"}}>
              <img src={profile} alt="" style={{width:"20px"}}/>
           <p style={{marginLeft:"8px"}}>{item.name}</p> 
            </div>
          </Option>
        ))}
        <Option value="add">
          <Button type="text" onClick={handleAddButtonClick}>
           + New Customer
          </Button>
        </Option>
      </Select>

      <Modal
        title="List"
        visible={showTodoListModal}
        onCancel={() => setShowTodoListModal(false)}
        footer={[
          <Button key="clear" onClick={handleClearList}>
           Clear
          </Button>,
          <Button key="save" onClick={handleSaveList}>
            Save
          </Button>
        ]}
      >
        <Input
          placeholder="Name"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          style={{ marginTop: '10px' }}
        />
        <Input
          placeholder="Elektron pochta"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          style={{ marginTop: '10px' }}
        />
        <Input
          placeholder="Phone"
          value={phoneValue}
          onChange={(e) => setPhoneValue(e.target.value)}
          style={{ marginTop: '10px' }}
        />
        <Button type="primary" onClick={handleTaskSubmit} style={{ marginTop: '10px' }}>
          Add
        </Button>
      </Modal>
    </div>
  );
};

export default CustomSelect;
