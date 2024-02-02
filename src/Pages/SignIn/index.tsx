import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input, Button, Form } from "antd";
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

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signIn, { data, error, isLoading }] = useSignInMutation();
  type FieldType = {
    email: string;
    password: string;
  };
  const handleSignIn = async (formData: FieldType) => {
    // console.log(formData, "formData");

    try {
      await signIn(formData);
    } catch (error: any) {
      console.error("Sign-in failed. Please try again.", error);
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(setToken(data?.token));
    } else if (error) {
      console.error("Sign-in failed. Please try again.", error);
    }
  }, [data, error, dispatch, navigate]);

  return (
    <Container>
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
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Button type="primary" htmlType="submit" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
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
