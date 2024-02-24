import React, { useEffect } from "react";
import { Form, Checkbox, message } from "antd";
import { NavbarSignUp } from "./NavbarSignUp";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../redux/authSlice";
import { useSignUpMutation } from "../../features/apiSlice";
import { AntButton, AntInput, PasswordInpt } from "./StylesForSignUp";
import { SIGNUP_FIELDS } from "./constants";

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUp, { data, error, isLoading }] = useSignUpMutation();

  const onFinish = async (values: any) => {
    try {
      await signUp(values);
    } catch (error) {
      console.error("Sign-up failed. Please try again.", error);
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(setToken(data?.token));
      navigate("/");
      message.success("Sign up successful!");
    } else if (error) {
      console.error("Sign-up failed. Please try again.", error);
    }
  }, [data, error, dispatch, navigate]);

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
          onFinish={onFinish}
        >
          {SIGNUP_FIELDS.map((field) => (
            <Form.Item
              key={field.name}
              label={field.label}
              name={field.name}
              rules={field.rules}
            >
              {field.element || <AntInput />}
            </Form.Item>
          ))}

          <Form.Item>
            <p style={{ fontFamily: "sans-serif" }}>
              Your data will be stored in the US data center.
            </p>
            <Checkbox style={{ margin: "10px 10px 10px 0" }}>
              I agree to the Terms of Service and Privacy Policy.
            </Checkbox>
            <AntButton type="primary" htmlType="submit" loading={isLoading}>
              SIGN UP FREE
            </AntButton>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SignUpForm;
