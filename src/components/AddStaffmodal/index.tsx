import React from "react"
import { Modal, Input, Select, DatePicker, Button, Form } from "antd"
import { ModalContent } from "./Style.Modal"

const { Option } = Select
const { Item } = Form

const initialValues = {
  role: "staff",
  gender: "male",
}

const AddStaffModal = ({ isOpen, onClose, onAdd }: any) => {
  const [form] = Form.useForm()

  const handleSubmit = (values: any) => {
    values.dob = values.dob.format("YYYY-MM-DD")
    onAdd(values)
    form.resetFields()
    onClose()
  }

  return (
    <Modal
      title="Add Staff"
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={form.submit}>
          Add
        </Button>,
      ]}
    >
      <Form form={form} onFinish={handleSubmit} initialValues={initialValues}>
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
  )
}

export default AddStaffModal
