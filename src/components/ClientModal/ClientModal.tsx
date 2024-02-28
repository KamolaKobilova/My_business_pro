import React, { useState } from "react";
import { Modal, Input, Button } from "antd";

export const ClientModal = ({ isOpen, onClose }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSave = () => {
    console.log("Saved:", { name, email, phoneNumber });
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      <Modal
        title="Register Client"
        open={isOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <Input.Group>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Phone Number"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Input.Group>
      </Modal>
    </>
  );
};
