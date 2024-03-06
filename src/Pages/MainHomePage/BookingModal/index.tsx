import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalContainer,
  Header,
  Title,
  ButtonNext,
  CustomSteps,
  CustomSelector,
  NextStepButton,
  WeekDaysButton,
  NextPreviousButton,
  CustomTimePicker,
  PrevSubmit,
  Circle,
  CustomInputNumber,
} from "./BookingStyles";
import logo from "../../../assets/BookingPage/logo.png";
import {
  Form,
  Input,
  Button,
  Steps,
  Select,
  TimePicker,
  InputNumber,
  Space,
} from "antd";
import { Store } from "antd/lib/form/interface";
import { BOOKING_MODAL_ITEMS } from "./constants";

interface BookingPageProps {
  onClose: () => void;
}
const { Step } = Steps;
const { Option } = Select;

export const BookingModal: React.FC<BookingPageProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [form] = Form.useForm();

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values: Store) => {
    console.log("Form submitted with values:", values);
  };

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleDayClick = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        <ModalContainer>
          <div className="switch-block">
            <Header>
              <img src={logo} alt="logo" />
              <h1>Bookings</h1>
            </Header>
            <Title>
              <h3>
                Hi there, <span>User</span>
              </h3>
              <p>
                Welcome to <span>Zoho Bookings.</span> We’ll help you find the
                perfect time with your clients. Give us a little information
                about your business to start with and we’ll fit you right in.
              </p>
              <CustomSteps current={currentStep} size="small">
                <Step title="Business Details" />
                <Step title="Your availability" />
                <Step title="Create service" />
              </CustomSteps>
            </Title>
          </div>
          <div className="input-block">
            <h3>Tell us</h3>
            <h1>your business</h1>
            <span>
              <Form form={form} onFinish={onFinish}>
                <div className="current-step">
                  {currentStep === 0 && (
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
                          {" "}
                          {item.selectorOptions ? (
                            <CustomSelector placeholder={item.placeholder}>
                              {" "}
                              <Circle />
                              {item.selectorOptions.map((option: any) => (
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
                        <NextStepButton type="primary" onClick={nextStep}>
                          Next
                        </NextStepButton>
                      </Form.Item>
                    </>
                  )}

                  {currentStep === 1 && (
                    <>
                      <Form.Item
                        name="field2"
                        label="Field 2"
                        rules={[
                          { required: true, message: "Please input Field 2!" },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <CustomTimePicker
                            format="HH:mm"
                            placeholder="Start Time"
                          />
                          <CustomTimePicker
                            format="HH:mm"
                            placeholder="End Time"
                          />
                        </div>
                      </Form.Item>

                      <Form.Item
                        name="weekdays"
                        label="Select Weekdays"
                        rules={[
                          {
                            required: true,
                            message: "Please select weekdays!",
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <div>
                          {weekDays.map((day) => (
                            <WeekDaysButton
                              key={day}
                              type={
                                selectedDays.includes(day)
                                  ? "primary"
                                  : "default"
                              }
                              onClick={() => handleDayClick(day)}
                            >
                              {day}
                            </WeekDaysButton>
                          ))}
                        </div>
                      </Form.Item>
                      <Form.Item>
                        <NextPreviousButton
                          variant="right"
                          type="primary"
                          onClick={prevStep}
                        >
                          Previous
                        </NextPreviousButton>

                        <NextPreviousButton
                          variant="left"
                          type="primary"
                          onClick={nextStep}
                        >
                          Next
                        </NextPreviousButton>
                      </Form.Item>
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      <Form.Item
                        name={["input3"]}
                        label="Service Name"
                        rules={[
                          { required: true, message: "Please input Field !" },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        style={{ width: "370px" }}
                      >
                        <Input style={{ width: "370px", height: "40px" }} />
                      </Form.Item>
                      <Form.Item
                        name="field2"
                        label="Duration"
                        rules={[
                          { required: true, message: "Please fill this!" },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Space>
                          <CustomInputNumber
                            min={0}
                            max={24}
                            placeholder="Hours"
                          />
                          <CustomInputNumber
                            min={0}
                            max={59}
                            placeholder="Minutes"
                          />
                        </Space>
                      </Form.Item>
                      <Form.Item>
                        <PrevSubmit
                          type="primary"
                          onClick={prevStep}
                          variant="right"
                        >
                          Previous
                        </PrevSubmit>
                        <PrevSubmit
                          type="primary"
                          htmlType="submit"
                          variant="left"
                        >
                          Submit
                        </PrevSubmit>
                      </Form.Item>
                    </>
                  )}
                </div>
              </Form>
            </span>
          </div>
        </ModalContainer>
      </ModalContent>
    </ModalOverlay>
  );
};
