import React, {useState} from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalContainer,Header, Title, ButtonNext
} from "./BookingStyles";
import logo from '../../../assets/BookingPage/logo.png';
import { Form, Input, Button, Steps, Select } from 'antd';
import { Store } from 'antd/lib/form/interface';
import {ExclamationCircleOutlined} from "@ant-design/icons"

interface CalendarModalProps {
  onClose: () => void;
}
const { Step } = Steps;
const { Option } = Select;

export const CalendarModal: React.FC<CalendarModalProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values: Store) => {
    console.log('Form submitted with values:', values);
  };

     
  const currencyOptions = [
    { value: 'UZS', label: 'UZS - Uzbekistan Sum' },
    { value: 'USD', label: 'USD - United States Dollar' },
    { value: 'EUR', label: 'EUR - Euro' },
    
    
  ];



  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={onClose} style={{position: "absolute", top:"215px", right:"370px"}}>&times;</ModalCloseButton>
        <ModalContainer>
          
          <div className="switch-block">
           <Header>
           <img src={logo} alt="" style={{width:60}} />
            <h1 style={{marginTop: 14 , fontFamily: "Inter"}}>Bookings</h1>
           </Header>
           <Title>
             <h3 style={{color: "#333333", fontFamily:"Inter", marginLeft:20, fontSize:18}}>Hi there, <span>User</span></h3>
                  <p style={{marginLeft:20, marginTop: 20}}>
                     Welcome to <span>Zoho Bookings.</span> We’ll help you find the perfect time
                     with your clients. Give us a little information about your
                     business to start with and we’ll fit you right in.
                 </p>
            <Steps current={currentStep} size="small" style={{display:"flex", flexDirection:'column', marginTop:"40px", width:"250px", height:"120px"}}>
                <Step title="Business Details" style={{marginLeft:"20px"}}/>
                <Step title="Your availability"style={{marginLeft:"8px"}} />
                <Step title="Create service" style={{marginLeft:"8px"}}/>
           </Steps>
           </Title>
           
          </div>
          <div className="input-block">
            <h3>Tell us</h3>
            <h1>your business</h1>
            <span>
            <Form form={form} onFinish={onFinish}>
     

      <div style={{ marginTop: '16px' }}>
        {currentStep === 0 && (
          <>
            <Form.Item
              name={['input1']}
              label="Business Name"
              rules={[{ required: true, message: 'Please input Field 1!' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Time Zone  <span><ExclamationCircleOutlined style={{color: "rgb(204, 204, 204)"}}/></span>
                </span>
              }
              name={['input2' ]}
              rules={[{ required: true, message: 'Please select Time Zone!' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Select placeholder="Select Time Zone">
                <Option value="UTC">UTC</Option>
                <Option value="GMT">GMT</Option>
              </Select>
            </Form.Item>
            <Form.Item
             label={
              <span>
                Currency <span><ExclamationCircleOutlined style={{color: "rgb(204, 204, 204)"}}/></span>
              
              </span>
            }
              name={[ 'input3']}
              rules={[{ required: true, message: 'Please select Currency!' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Select placeholder="Select Currency">
                {currencyOptions.map((currency) => (
                  <Option key={currency.value} value={currency.value}>
                    {currency.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={nextStep}>
                Next
              </Button>
            </Form.Item>
          </>
        )}

        {currentStep === 1 && (
          <>
            <Form.Item
              name="field2"
              label="Field 2"
              rules={[{ required: true, message: 'Please input Field 2!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={prevStep}>
                Previous
              </Button>
              <Button type="primary" onClick={nextStep}>
                Next
              </Button>
            </Form.Item>
          </>
        )}

        {currentStep === 2 && (
          <>
            <Form.Item
              name="field3"
              label="Field 3"
              rules={[{ required: true, message: 'Please input Field 3!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={prevStep}>
                Previous
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
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


