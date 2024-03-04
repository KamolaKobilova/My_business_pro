import React, { useState } from "react"
import { Select, Input, Button, Modal, Form } from "antd"
import profile from "../../../assets/BookingPage/profile.jpeg"
import uzbekFlag from "../../../assets/BookingPage/flag.png"
import "./todoModal.css"
import { CustomButton } from "./stylesforToDo"
import { TO_DO_MODAL_FIELDS } from "./constants"

interface TodoItem {
  id: number
  name: string
  email: string
  phone: string
}

const { Option } = Select
const { useForm } = Form

const CustomSelect: React.FC = () => {
  const [form] = useForm()

  const handleAddButtonClick = () => {
    form.setFieldsValue({ showTodoListModal: true })
  }

  const handleTaskSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const newItem: TodoItem = {
          id: form.getFieldValue("nextId"),
          ...values,
        }
        form.setFieldsValue({
          todoItems: [...form.getFieldValue("todoItems"), newItem],
        })
        form.setFieldsValue({ nextId: form.getFieldValue("nextId") + 1 })
        form.setFieldsValue({ showTodoListModal: false })
        form.resetFields()
      })
      .catch((error) => {
        console.log("Validation failed:", error)
      })
  }

  const handleClearList = () => {
    form.setFieldsValue({ todoItems: [] })
  }

  return (
    <>
      <Select
        placeholder="Type and enter"
        style={{ width: "342px", height: "40px", marginLeft: "197px" }}
      >
        {form.getFieldValue("todoItems").map((item: TodoItem) => (
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
        open={form.getFieldValue("showTodoListModal")}
        onCancel={() => form.setFieldsValue({ showTodoListModal: false })}
        footer={[
          <div>
            <CustomButton key="clear" onClick={handleClearList}>
              Clear
            </CustomButton>
            <CustomButton
              className="antBtn"
              key="save"
              onClick={handleTaskSubmit}
            >
              Save
            </CustomButton>
          </div>,
        ]}
        width={500}
      >
        <Form form={form} layout="vertical">
          {TO_DO_MODAL_FIELDS.map((field) => (
            <Form.Item
              key={field.name}
              label={field.label}
              name={field.name}
              rules={field.rules}
            >
              {field.element || <></>}
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </>
  )
}

export default CustomSelect
