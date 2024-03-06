import { Button, Form, Input, Select } from "antd";
import { CustomSelector } from "../BookingStyles";
import { BOOKING_MODAL_ITEMS } from "../constants";

const { Option } = Select;

const StepZero = ({ currentStep, nextStep }: any) => {
  return (
    <>
      {currentStep === 0 && (
        <Form>
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
                />
              )}
            </Form.Item>
          ))}
          <Form.Item>
            <Button type="primary" onClick={nextStep}>
              Next
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default StepZero;
