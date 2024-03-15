import React from "react"
import { Modal, Button, Form, Input, Select, message, TimePicker } from "antd"
import { ModalContent } from "../AddStaffmodal/Style.Modal"

import { CustomButton, ServiceModal } from "../AddStaffmodal/Style.Modal"
import { useGetStaffQuery } from "../../features/apiSlice"
import ServiceApi, { StaffType, WorkSpaceTypes } from "../ServiceApi"
const { Item } = Form
const { Option } = Select

const AddServiceModal = ({ isOpen, onClose }: any) => {
  const { data: staffData, isFetching } = useGetStaffQuery("")
  const staff = staffData?.payload ?? []
  const { handleSubmit, WORKSPACES, isLoading } = ServiceApi()

  const [form] = Form.useForm()
  const onFinish = async (values: any) => {
    await handleSubmit(values)
    onClose()
    form.resetFields()
  }

  return (
    <ServiceModal
      title="Add new service"
      open={isOpen}
      onCancel={onClose}
      footer={[
        <CustomButton key="back" onClick={onClose}>
          Cancel
        </CustomButton>,
        <CustomButton key="submit" type="primary" onClick={form.submit}>
          Add
        </CustomButton>,
      ]}
    >
      <Form form={form} onFinish={onFinish}>
        <ModalContent>
          <Item name="workspace">
            <Select placeholder="Choose workspace" loading={isLoading}>
              {WORKSPACES.map((workspace: WorkSpaceTypes, index: number) => (
                <Option key={`${workspace?._id ?? index}`}>
                  {workspace?.name}
                </Option>
              ))}
            </Select>
          </Item>

          <Item
            name="name"
            rules={[
              { required: true, message: "Please enter name of the service" },
            ]}
            valuePropName="value"
          >
            <Input placeholder="Name of the service" />
          </Item>
          <Item name="staff">
            <Select placeholder="Staff" loading={isFetching}>
              {" "}
              {staff.map((staff: StaffType, index: number) => (
                <Option key={`${staff?._id ?? index}`}>{staff?.name}</Option>
              ))}
            </Select>
          </Item>

          <div className="duration">
            <Item
              name="duration"
              label="Duration"
              rules={[{ required: true }]}
              initialValue={form.getFieldValue("duration")}
            >
              <TimePicker placeholder="Select duration" format="HH:mm" />
            </Item>
          </div>
        </ModalContent>
      </Form>
    </ServiceModal>
  )
}

export default AddServiceModal
