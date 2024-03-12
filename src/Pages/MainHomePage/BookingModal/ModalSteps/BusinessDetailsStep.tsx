import React from "react"
import { Form, Input, Select } from "antd"
import { CustomSelector, NextButton } from "../Style.Booking"
import { BOOKING_MODAL_ITEMS } from "../constants"

const { Option } = Select
const BusinessDetailsStep = ({ nextStep, form, updateFormData }: any) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    form.setFieldsValue({ [name]: value })
    updateFormData({ [name]: value })
  }

  return (
    <>
      {BOOKING_MODAL_ITEMS.map((item) => (
        <Form.Item
          key={item.name}
          name={item.name}
          label={item.label}
          rules={item.rules}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          {item.selectorOptions ? (
            <CustomSelector placeholder={item.placeholder}>
              {item.selectorOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </CustomSelector>
          ) : (
            <Input
              style={{ height: "35px" }}
              placeholder={item.placeholder}
              name={item.name}
              onChange={handleInputChange}
            />
          )}
        </Form.Item>
      ))}
      <Form.Item>
        <NextButton onClick={nextStep} type="primary" htmlType="submit">
          Next
        </NextButton>
      </Form.Item>
    </>
  )
}
export default BusinessDetailsStep
