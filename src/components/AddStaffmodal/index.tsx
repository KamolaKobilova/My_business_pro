import React from "react"
import { Modal, Input, Select, DatePicker, Button, Form } from "antd"
import { ModalContent } from "./Style.Modal"
import StaffApi from "./StaffApi"

const { Option } = Select
const { Item } = Form

const initialValues = {
  role: "staff",
  gender: "male",
}

const AddStaffModal = ({ isOpen, onClose, onAdd }: any) => {
  const [form] = Form.useForm()

   const {handleSubmit, service}  = StaffApi()
  const onFinish = async (values: any) => {
    values.datebirth = values.datebirth.format("YYYY-MM-DD" )

 await handleSubmit(values)
    console.log(values);
    

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
      <Form form={form} onFinish={onFinish} initialValues={initialValues}>
        <ModalContent>
          <Item
            name="firstName"
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
          <Item name="phone">
            <Input placeholder="Phone Number" />
          </Item>
          <Item name="role">
            <Select placeholder="Role">
              <Option value="superadmin">Super Admin</Option>
              <Option value="doctor">Doctor</Option>
            </Select>
          </Item>
          <Item name="datebirth">
            <DatePicker placeholder="Date of Birth" />
          </Item>
          <Item name="foor">
            <Select placeholder="Gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Item>
          <Item name="service">
            <Select placeholder="Service">
              {service.map((service: any, index: number) => (
                <Option key={`${service?._id ?? index}`}>{service?.name}</Option>
              ))}
            </Select>
          </Item>
        </ModalContent>
      </Form>
    </Modal>
  )
}

export default AddStaffModal
