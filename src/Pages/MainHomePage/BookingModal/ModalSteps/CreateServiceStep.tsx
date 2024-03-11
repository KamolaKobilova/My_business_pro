import { Form, Input, Space, TimePicker } from "antd"
import { useForm } from "rc-field-form"
import {
  CustomInputNumber,
  CustomTimePicker,
  ModalCloseButton,
  PrevSubmit,
} from "../BookingStyles"

const CreateServiceStep = ({
  prevStep,
  onClose,
  form,
  updateFormData,
}: any) => {
  const handleTimeChange = (time: any) => {
    const formattedTime = time.format("HH:mm")
    form.setFieldsValue({ duration: formattedTime })
    updateFormData({ duration: formattedTime })
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
        <Input style={{ width: "370px", height: "40px" }} />
      </Form.Item>
      <Form.Item
        name="duration"
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
