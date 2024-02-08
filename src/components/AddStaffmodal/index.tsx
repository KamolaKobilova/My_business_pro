import React from "react";
import { Modal, Input, Select, DatePicker, Button, Form } from "antd";
import { ModalContent } from "./stylesForModal";

const { Option } = Select;
const { Item } = Form;

const AddStaffModal = ({ isOpen, onClose }: any) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Submitted values:", values);
    onClose();
  };

  return (
    <Modal
      title="Add Staff"
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={() => form.submit()}>
          Add
        </Button>,
      ]}
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        initialValues={{
          role: "staff",
          gender: "male",
        }}
      >
        <ModalContent>
          <Item
            name="name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input placeholder="Name" />
          </Item>
          <Item
            name="email"
            rules={[{ required: true, message: "Please enter email" }]}
          >
            <Input placeholder="Email" />
          </Item>
          <Item name="phoneNumber">
            <Input placeholder="Phone Number" />
          </Item>
          <Item name="role">
            <Select placeholder="Role">
              <Option value="staff">Staff</Option>
              <Option value="manager">Manager</Option>
            </Select>
          </Item>
          <Item name="dob">
            <DatePicker placeholder="Date of Birth" />
          </Item>
          <Item name="gender">
            <Select placeholder="Gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Item>
        </ModalContent>
      </Form>
    </Modal>
  );
};

export default AddStaffModal;
