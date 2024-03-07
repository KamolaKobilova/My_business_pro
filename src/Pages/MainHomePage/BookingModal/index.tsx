import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalContainer,
  Header,
  Title,
  CustomSteps,
} from "./BookingStyles";
import logo from "../../../assets/BookingPage/logo.png";
import { Form, Steps, Select } from "antd";
import { Store } from "antd/lib/form/interface";

import BusinessDetailsStep from "./ModalSteps/BusinessDetailsStep";
import AvaibilityStep from "./ModalSteps/AvaibilityStep";
import CreateServiceStep from "./ModalSteps/CreateServiceStep";

interface BookingPageProps {
  onClose: () => void;
}
const { Step } = Steps;

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
                    <BusinessDetailsStep nextStep={nextStep} />
                  )}
                  {currentStep === 1 && (
                    <AvaibilityStep
                      nextStep={nextStep}
                      prevStep={prevStep}
                      selectedDays={selectedDays}
                      handleDayClick={handleDayClick}
                    />
                  )}
                  {currentStep === 2 && (
                    <CreateServiceStep prevStep={prevStep} />
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
