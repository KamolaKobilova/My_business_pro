import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";

import { NavbarSignUp } from "./NavbarSignUp";
import { useHook } from "./useHook";
import { useNavigate } from "react-router-dom";

const SignUpForm: React.FC = () => {
  const { handleSignUp, error } = useHook();
  const navigate = useNavigate()

  useEffect(() => {
    if(error) {
      message.open({
        type: 'error',
        content: error?.data?.msg
      })
      if (error?.data?.msg.includes("E11000")) {
        navigate("/sign-in")
      }
    }
  }, [error])
  
  return (
    <>
      <NavbarSignUp />
      <hr />
      <div className="main" style={{ marginTop: "80px" }}>
        <h3
          style={{
            maxWidth: "500px",
            margin: "auto",
            fontFamily: "semibold",
            fontSize: "23px",
            marginBottom: "30px",
          }}
        >
          Start with your free account today.
        </h3>
        <Form
          name="signup-form"
          initialValues={{ remember: true }}
          style={{ maxWidth: "500px", margin: "auto" }}
          layout="vertical"
          onFinish={handleSignUp}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please enter your first name!" },
            ]}
          >
            <Input style={{ height: "45px" }} />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please enter your last name!" },
            ]}
          >
            <Input style={{ height: "45px" }} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input style={{ height: "45px" }} />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
          >
            <Input style={{ width: "100%", height: "45px" }} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password style={{ height: "45px" }} />
          </Form.Item>

          <Form.Item>
            <p style={{ fontFamily: "sans-serif" }}>
              Your data will be stored in the US data center.
            </p>
            <Checkbox style={{ margin: "10px 10px 10px 0" }}>
              I agree to the Terms of Service and Privacy Policy.
            </Checkbox>
            <Button
              style={{
                height: "45px",
                width: "100%",
                backgroundColor: "#F0483E",
                fontSize: "15px",
                fontFamily: "semiBold",
              }}
              type="primary"
              htmlType="submit"
            >
              SIGN UP FREE
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SignUpForm;
