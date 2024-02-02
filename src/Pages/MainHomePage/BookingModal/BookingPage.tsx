import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalContainer,Header, Title, ButtonNext
} from "./BookingStyles";
import logo from '../../../assets/BookingPage/logo.png';
import { Form, Input, Button, Steps, Select, TimePicker, InputNumber, Space } from 'antd';
import { Store } from 'antd/lib/form/interface';
import {ExclamationCircleOutlined} from "@ant-design/icons"

interface CalendarModalProps {
  onClose: () => void;
}
const { Step } = Steps;
const { Option } = Select;

export const CalendarModal: React.FC<CalendarModalProps> = ({ onClose }) => {
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
    console.log('Form submitted with values:', values);
  };

     
  const currencyOptions = [
    { value: 'UZS', label: 'UZS - Uzbekistan Sum' },
    { value: 'USD', label: 'USD - United States Dollar' },
    { value: 'EUR', label: 'EUR - Euro' },
    
    
  ];
   ////////Field 2///
   const handleDayClick = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };


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
          <div className="input-block" style={{marginLeft:"10px"}}>
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
              <Input style={{height:"35px"}} />
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
              <Select placeholder="Select Time Zone" style={{height:"35px"}}>
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
              <Select placeholder="Select Currency" style={{height:"35px"}}>
                {currencyOptions.map((currency) => (
                  <Option key={currency.value} value={currency.value}>
                    {currency.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={nextStep} style={{width:"100px", position:"relative", top:"35px", left:"190px", backgroundColor:"#4F4A7B"}}>
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
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TimePicker
            format="HH:mm"
            style={{ width: '190px', height: '40px' }}
            placeholder="Start Time"
            
          />
          <TimePicker
            format="HH:mm"
            style={{ width: '190px', height: '40px' }}
            placeholder="End Time"
            
          />
        </div>
      </Form.Item>

      <Form.Item
        name="weekdays"
        label="Select Weekdays"
        rules={[{ required: true, message: 'Please select weekdays!' }]}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        
      >
        <div>
          <Button
            type={selectedDays.includes('Monday') ? 'primary' : 'default'}
            onClick={() => handleDayClick('Monday')}
            style={{ marginRight: '10px',height:"35px", borderRadius:"15px", borderColor:"#4F4A7B", backgroundColor:"#dbd9f5" }}
          >
            Monday
          </Button>
          <Button
            type={selectedDays.includes('Tuesday') ? 'primary' : 'default'}
            onClick={() => handleDayClick('Tuesday')}
            style={{ marginRight: '10px',height:"35px", borderRadius:"15px", borderColor:"#4F4A7B", backgroundColor:"#dbd9f5" }}
          >
            Tuesday
          </Button>
          <Button
            type={selectedDays.includes('Wednesday') ? 'primary' : 'default'}
            onClick={() => handleDayClick('Wednesday')}
            style={{ marginRight: '10px',height:"35px", borderRadius:"15px", borderColor:"#4F4A7B", backgroundColor:"#dbd9f5" }}
          >
            Wednesday
          </Button>
          <Button
            type={selectedDays.includes('Thursday') ? 'primary' : 'default'}
            onClick={() => handleDayClick('Thursday')}
            style={{ marginRight: '10px',height:"35px", borderRadius:"15px", borderColor:"#4F4A7B", backgroundColor:"#dbd9f5" }}
          >
            Thursday
          </Button>
          <Button
            type={selectedDays.includes('Friday') ? 'primary' : 'default'}
            onClick={() => handleDayClick('Friday')}
            style={{ marginRight: '10px',height:"35px",marginTop:"12px", borderRadius:"15px", borderColor:"#4F4A7B", backgroundColor:"#dbd9f5" }}
          >
            Friday
          </Button>
          <Button
            type={selectedDays.includes('Saturday') ? 'primary' : 'default'}
            onClick={() => handleDayClick('Saturday')}
            style={{ marginRight: '10px',height:"35px", borderRadius:"15px", borderColor:"#4F4A7B", backgroundColor:"#dbd9f5" }}
          >
            Saturday
          </Button>
          <Button
            type={selectedDays.includes('Sunday') ? 'primary' : 'default'}
            onClick={() => handleDayClick('Sunday')}
            style={{ marginRight: '10px',height:"35px", borderRadius:"15px", borderColor:"#4F4A7B", backgroundColor:"#dbd9f5" }}
          >
            Sunday
          </Button>
        </div>
      </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={prevStep}style={{width:"100px", position:"relative", top:"70px", left:"8px", backgroundColor:"#4F4A7B"}}>
                Previous
              </Button>
              <Button type="primary" onClick={nextStep}style={{width:"100px", position:"relative", top:"70px", left:"190px", backgroundColor:"#4F4A7B"}}>
                Next
              </Button>
            </Form.Item>
          </>
        )}

        {currentStep === 2 && (
          <>
            <Form.Item
              name={['input3']}
              label="Service Name"
              rules={[{ required: true, message: 'Please input Field !' }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              style={{ width: '370px'}}
              
            >
              <Input style={{ width: '370px', height:"40px"}}/>
            </Form.Item>
            <Form.Item
             name="field2"
             label="Duration"
             rules={[{ required: true, message: 'Please fill this!' }]}
             labelCol={{ span: 24 }}
             wrapperCol={{ span: 24 }}
      >
        <Space>
          <InputNumber
            min={0}
            max={24}
            placeholder="Hours"
            style={{ width: '180px', height:"40px" }}

            // You can customize other props as needed
            // defaultValue={0}
            // onChange={(value) => console.log(value)}
          />
          <InputNumber
            min={0}
            max={59}
            placeholder="Minutes"
            style={{ width: '180px', height:"40px" }}
            // You can customize other props as needed
            // defaultValue={0}
            // onChange={(value) => console.log(value)}
          />
        </Space>
      </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={prevStep}style={{width:"100px", position:"relative", top:"120px", left:"8px", backgroundColor:"#4F4A7B"}}>
                Previous
              </Button>
              <Button type="primary" htmlType="submit"style={{width:"100px", position:"relative", top:"120px", left:"150px", backgroundColor:"#4F4A7B"}}>
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
