import React, { useState } from 'react';
import { Select, Input, Button, Modal } from 'antd';
import profile from '../../../assets/BookingPage/profile.jpeg';
import uzbekFlag from '../../../assets/BookingPage/flag.png';
import './todoModal.css'

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

  return (
    <>
    <Select
        placeholder="Type and enter"
        style={{  width: "342px", height:"40px", marginLeft:"197px" }}
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
        title={<div className="customTitle">+ New Customer</div>} 
        visible={showTodoListModal}
        onCancel={() => setShowTodoListModal(false)}
        footer={[
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button key="clear" className='antBtn' onClick={handleClearList} style={{width:"270px",height:"50px", marginTop:"20px", borderRadius:"0", marginLeft:"1"}}>
             Clear
            </Button>
            <Button type="primary" className='antBtn' key="save" onClick={handleTaskSubmit} style={{width:"270px",height:"50px", marginTop:"20px", borderRadius:"0"}}>
             Save
            </Button>
          </div>
        ]}
        width={500}
      >
        
        <div className='main'>

        <div style={{display:"flex", alignItems:"center"}}>
          <p style={{marginLeft:"20px", fontSize:"18px"}}>Name</p>
          <Input
           placeholder="Name"
           value={nameValue}
           onChange={(e) => setNameValue(e.target.value)}
           style={{ marginTop: '30px', width:"250px", height:"40px", marginLeft:"40px", marginBottom:"15px" }}
          />
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
          <p style={{marginLeft:"20px", fontSize:"18px"}}>Email</p>
          <Input
              placeholder="Email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              style={{ marginTop: '10px', width:"250px", height:"40px", marginLeft:"44px", marginBottom:"15px" }}
          />
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
          <p style={{marginLeft:"20px", fontSize:"18px"}}>Phone</p>
          <Input
              placeholder="Phone"
              value={phoneValue}
              onChange={(e) => {
                   let newValue = e.target.value;
                   if (!newValue.startsWith('+998')) {
                     newValue = '+998' + newValue;
                   }
                   setPhoneValue(newValue);
              }}
              style={{ marginTop: '10px', width:"250px", height:"40px", marginLeft:"40px", marginBottom:"20px" }} 
              prefix={<img src={uzbekFlag} alt="Uzbekistan Flag" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />} 
          />
        </div>
        </div>
      </Modal>
    </>
  );
};




export default CustomSelect;
