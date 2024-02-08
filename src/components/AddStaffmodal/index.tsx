import React, { useState } from "react";
import { Modal, Input, Select, DatePicker, Button } from "antd";
import { ModalContent } from "./stylesForModal";

const { Option } = Select;

const AddStaffModal = ({ isOpen, onClose }: any) => {
  const [staffData, setStaffData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    role: "staff",
    dob: null,
    gender: "male",
    assignedServices: [],
  });

  const handleChange = (name: string, value: any) => {
    setStaffData({ ...staffData, [name]: value });
  };

  const handleSubmit = () => {
    // Отправить данные на сервер
    console.log("Отправленные данные:", staffData);
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
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Add
        </Button>,
      ]}
    >
      <ModalContent>
        <Input
          placeholder="Name"
          value={staffData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <Input
          placeholder="Email"
          value={staffData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <Input
          placeholder="Phone Number"
          value={staffData.phoneNumber}
          onChange={(e) => handleChange("phoneNumber", e.target.value)}
        />
        <Select
          placeholder="Role"
          value={staffData.role}
          onChange={(value) => handleChange("role", value)}
        >
          <Option value="staff">Staff</Option>
          <Option value="manager">Manager</Option>
        </Select>
        <div style={{ marginBottom: "20px" }}>
          <DatePicker
            placeholder="Date of Birth"
            value={staffData.dob}
            onChange={(date) => handleChange("dob", date)}
          />{" "}
        </div>
        <Select
          placeholder="Gender"
          value={staffData.gender}
          onChange={(value) => handleChange("gender", value)}
        >
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </ModalContent>
    </Modal>
  );
};

export default AddStaffModal;
