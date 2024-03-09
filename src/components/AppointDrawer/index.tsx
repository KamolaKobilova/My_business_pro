import React, { useState } from "react"
import TodoModal from "../../Pages/MainHomePage/ToDoModal/TodoModal"
import { Button, DatePicker, Form, Select, TimePicker, Checkbox } from "antd"
// import '../style.css'
import TextArea from "antd/es/input/TextArea"


function AppointDrawer() {
  const [componentSize, setComponentSize] = useState<0 | "default">(
    "default"
  )

  const onFormLayoutChange = ({ size }: { size: 0}) => {
    setComponentSize(size)
  }
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      // size={componentSize as d}
      style={{ maxWidth: 600, marginLeft: "80px", marginTop: "30px" }}
    >
      <Form.Item label="Workspace">
        <Select className="select">
          <Select.Option value="demo">Alicode</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Service">
        <Select className="select">
          <Select.Option value="demo">Select</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Assign Staff">
        <Select className="select">
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Date & Time">
        <DatePicker className="selectDate" />
        <TimePicker className="selectTime" />
      </Form.Item>
      <Form.Item style={{ marginLeft: "-94px" }}>
        <TodoModal />
      </Form.Item>
      <Form.Item label="Notes" className="area">
        <TextArea
          style={{
            height: "100px",
          }}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox className="checkbox" style={{ marginLeft: "100px" }}>
          Send notification for customers
        </Checkbox>
      </Form.Item>
      <div className="form-footer">
        <Button>Cancel</Button>
        <Button type="primary">Submit</Button>
      </div>
    </Form>
  )
}

export default AppointDrawer
