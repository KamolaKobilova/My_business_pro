import { Form, Input, Space } from "antd";
import { CustomInputNumber, PrevSubmit } from "./BookingStyles";

const StepTwo = ({ currentStep, prevStep }: any) => {
  return (
    <>
      {currentStep === 2 && (
        <Form>
          <Form.Item
            name="serviceName"
            label="Service Name"
            rules={[{ required: true, message: "Please input Service Name!" }]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ width: "370px" }}
          >
            <Input style={{ width: "370px", height: "40px" }} />
          </Form.Item>
          <Form.Item
            name="duration"
            label="Duration"
            rules={[{ required: true, message: "Please input Duration!" }]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Space>
              <CustomInputNumber min={0} max={24} placeholder="Hours" />
              <CustomInputNumber min={0} max={59} placeholder="Minutes" />
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
        </Form>
      )}
    </>
  );
};

export default StepTwo;
