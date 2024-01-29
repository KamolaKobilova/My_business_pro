import axios from "axios";
import React, { FormEvent, useState, useEffect, useReducer } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { Input, Button } from "antd";
import SignInCarousel from "./SignInCarousel";
import {
  Container,
  SignInBlock,
  Back,
  InputBlock,
  StyledGoogleButton,
} from "./StylesForSignIn/styles";
import signInReducer, { initialState } from "../../store/signInReducer";
import { setToken } from "../../store/authslice";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFn = async (formData: SignInFormData) => {
  try {
    const response = await axios.post(
      "https://icare-api-3zia.onrender.com/api/auth/login",
      formData
    );

    if (!response.data.token) {
      throw new Error("Token not received from the server");
    }

    return response.data.token;
  } catch (error: any) {
    throw new Error(`Error signing in: ${error.message}`);
  }
};

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, dispatchSignIn] = useReducer(signInReducer, initialState);

  const {
    mutate: signInMutation,
    isLoading,
    isError,
  } = useMutation((formData: SignInFormData) => signInFn(formData), {
    onSuccess: (token: string) => {
      dispatch(setToken(token));
      dispatchSignIn({ type: "SET_REDIRECT_TO_HOME", payload: true });

      localStorage.setItem("authToken", token);
    },
    onError: (error: Error) => {
      console.error(error.message);
    },
  });

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        dispatch(setToken(storedToken));
        dispatchSignIn({ type: "SET_REDIRECT_TO_HOME", payload: true });
      }
    };

    checkToken();
  }, [dispatch, dispatchSignIn]);

  useEffect(() => {
    if (state.redirectToHome && !isLoading && !isError) {
      navigate("/main-home-page");
    }
  }, [state.redirectToHome, isLoading, isError, navigate]);

  const handleEmailSignIn = async (e: FormEvent) => {
    e.preventDefault();

    const formData: SignInFormData = {
      email: "sanjarbekweb@gmail.com",
      password: "123456",
    };

    signInMutation(formData);
  };

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
            <form onSubmit={handleEmailSignIn}>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <Button type="primary" htmlType="submit" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
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
