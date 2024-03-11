import { Form, Input, Space, TimePicker } from "antd"
import { useForm } from "rc-field-form"
import {
  CustomInputNumber,
  CustomTimePicker,
  ModalCloseButton,
  PrevSubmit,
} from "../Style.Booking"

const CreateServiceStep = ({
  prevStep,
  onClose,
  form,
  updateFormData,
}: any) => {
  const handleTimeChange = (time: any) => {
    const formattedTime = time.format("HH:mm")
    form.setFieldsValue({ serviceDuration: formattedTime })
    updateFormData({ serviceDuration: formattedTime })
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    form.setFieldsValue({ serviceName: value })
    updateFormData({ serviceName: value })
  }

  return (
    <>
      <Form.Item
        name="serviceName"
        label="Service Name"
        rules={[{ required: true, message: "Please select Service Name!" }]}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ width: "370px" }}
      >
        <Input
          onChange={handleInputChange}
          style={{ width: "370px", height: "40px" }}
        />
      </Form.Item>
      <Form.Item
        name="serviceDuration"
        label="Duration"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Space>
          <CustomTimePicker
            format="HH:mm"
            placeholder="Duration"
            onChange={handleTimeChange}
          />
        </Space>
      </Form.Item>
      <Form.Item>
        <PrevSubmit type="primary" onClick={prevStep} variant="right">
          Previous
        </PrevSubmit>
        <PrevSubmit type="primary" htmlType="submit" variant="left">
          Submit
        </PrevSubmit>
      </Form.Item>
    </>
  )
}

export default CreateServiceStep
