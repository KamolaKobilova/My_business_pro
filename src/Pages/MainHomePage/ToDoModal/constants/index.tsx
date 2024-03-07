import { Input } from "antd"
import { Rule } from "antd/es/form"

type ToDoModalType = {
  label: string
  name: string
  rules: Rule[]
  element?: JSX.Element
}

export const TO_DO_MODAL_FIELDS: ToDoModalType[] = [
  {
    label: "Name",
    name: "name",
    rules: [{ required: true, message: "Please enter name" }],
  },
  {
    label: "Email",
    name: "email",
    rules: [{ required: true, message: "Please enter an email" }],
  },
  {
    label: "Phone",
    name: "phone",
    rules: [{ required: true, message: "Please enter a phone number" }],
    element: <Input />,
  },
]
