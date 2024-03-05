import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Form } from "antd";
import SignInCarousel from "./SignInCarousel";
import {
  Container,
  SignInBlock,
  Back,
  InputBlock,
  StyledGoogleButton,
} from "./StylesForSignIn/styles";
import { setToken } from "../../redux/authSlice";
import { useSignInMutation } from "../../features/apiSlice";
import { CustomInput, CustomPasswordInput } from "./StylesForSignIn";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FieldType {
  email: string;
  password: string;
}

const SignIn = () => {
  const dispatch = useDispatch();
  const [signIn, { data, error, isLoading }] = useSignInMutation();
<<<<<<< HEAD
  type FieldType = {
    email: string;
    password: string;
  };
  const handleSignIn = async (formData: FieldType) => {
 
=======
>>>>>>> development

  const handleSignIn = async (formData: FieldType) => {
    try {
      await signIn(formData);
    } catch (error) {
      toast.error("Sign-in failed. Please try again.");
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(setToken(data?.token));
    } else if (error) {
      toast.error("Sign-in failed. Please try again.");
    }
  }, [data, error, dispatch]);

  return (
    <Container>
      <ToastContainer />
      <Back>
        <SignInBlock>
          <InputBlock>
            <NavLink to="/">
              <img src="/assets/SignInImg/logo.png" alt="Logo" />
            </NavLink>
            <h1>Sign in</h1>
            <p>to access the home page </p>
            <Form onFinish={handleSignIn}>
              <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <CustomInput />
              </Form.Item>
              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <CustomPasswordInput />
              </Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Sign in
              </Button>
            </Form>
            <h3>Or</h3>
            <StyledGoogleButton />
          </InputBlock>
          <SignInCarousel />
        </SignInBlock>
      </Back>
    </Container>
  );
};

export default SignIn;
