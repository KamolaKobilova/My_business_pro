import React,{useState} from 'react';
import { Select, Input, Button, Modal, Form } from 'antd';
import profile from '../../../assets/BookingPage/profile.jpeg';
// import profile from '../../../assets/BookingPage/'
import uzbekFlag from '../../../assets/BookingPage/flag.png';
import './todoModal.css';

interface TodoItem {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const { Option } = Select;
const { useForm } = Form;

const CustomSelect: React.FC = () => {
  const [form] = useForm();
  const [showTodoListModal, setShowTodoListModal] = useState(false);
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleAddButtonClick = () => {
    setShowTodoListModal(true);
  };

  const handleTaskSubmit = () => {
    form.validateFields().then((values) => {
      const newItem: TodoItem = {
        id: nextId,
        ...values
      };
      setTodoItems([...todoItems, newItem]);
      setNextId(nextId + 1);
      setShowTodoListModal(false);
      form.resetFields();
    }).catch((error) => {
      console.log('Validation failed:', error);
    });
  };

  const handleClearList = () => {
    setTodoItems([]);
  };

  return (
    <>
      <Select
        placeholder="Type and enter"
        style={{ width: "342px", height: "40px", marginLeft: "197px" }}
      >
        {todoItems.map(item => (
          <Option key={item.id} value={item.name}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={profile} alt="" style={{ width: "20px" }} />
              <p style={{ marginLeft: "8px" }}>{item.name}</p>
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
        open={showTodoListModal}
        onCancel={() => setShowTodoListModal(false)}
        footer={[
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button key="clear" className='antBtn' onClick={handleClearList} style={{ width: "270px", height: "50px", marginTop: "20px", borderRadius: "0", marginLeft: "1" }}>
              Clear
            </Button>
            <Button type="primary" className='antBtn' key="save" onClick={handleTaskSubmit} style={{ width: "270px", height: "50px", marginTop: "20px", borderRadius: "0" }}>
              Save
            </Button>
          </div>
        ]}
        width={500}
      >

        <Form form={form} layout="vertical">
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter a name' }]}>
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter an email' }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please enter a phone number' }]}>
            <Input
              placeholder="Phone"
              prefix={<img src={uzbekFlag} alt="Uzbekistan Flag" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CustomSelect;
