import React, { useState } from "react"
import { Select, Input, Button, Modal, Form } from "antd"
import profile from "../../../assets/BookingPage/profile.jpeg"
import uzbekFlag from "../../../assets/BookingPage/flag.png"
import "./todoModal.css"
import {  CustomOption, CustomSelector} from "./Todo.style"
import NewCustomerModal from "../../../components/NewCustomerModal.tsx"
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
      <CustomSelector
        placeholder="Type and enter"
      >
        {form.getFieldValue("todoItems").map((item: TodoItem) => (
          <CustomOption key={item.id} value={item.name}>
            <div className="option" >
              <img src={profile} alt="profile"  />
              <p >{item.name}</p>
            </div>
          </CustomOption>
        ))}
        <Option value="add">
          <Button type="text" onClick={handleAddButtonClick}>
            + New Customer
          </Button>
        </Option>
      </CustomSelector>
      <NewCustomerModal handleClearList={handleClearList} handleTaskSubmit={handleTaskSubmit} />
    </>
  )
}

export default CustomSelect
