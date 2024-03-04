import React, { useEffect } from "react"
import { Form, message } from "antd"
import { NavbarSignUp } from "./NavbarSignUp"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setToken } from "../../redux/authSlice"
import { useSignUpMutation } from "../../features/apiSlice"
import {
  AntButton,
  AntInput,
  CustomCheckbox,
  CustomForm,
  Main,
} from "./StylesForSignUp"
import { SIGNUP_FIELDS } from "./constants"

const SignUp: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [signUp, { data, error, isLoading }] = useSignUpMutation()

  const onFinish = async (values: any) => {
    try {
      await signUp(values)
    } catch (error) {
      console.error("Sign-up failed. Please try again.", error)
    }
  }

  useEffect(() => {
    if (data) {
      dispatch(setToken(data?.token))
      navigate("/")
      message.success("Sign up successful!")
    } else if (error) {
      console.error("Sign-up failed. Please try again.", error)
    }
  }, [data, error, dispatch, navigate])

  return (
    <>
      <NavbarSignUp />
      <hr />
      <Main>
        <h3>Start with your free account today.</h3>
        <CustomForm
          name="signup-form"
          initialValues={{ remember: true }}
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
            <p>Your data will be stored in the US data center.</p>
            <CustomCheckbox>
              I agree to the Terms of Service and Privacy Policy.
            </CustomCheckbox>
            <AntButton type="primary" htmlType="submit" loading={isLoading}>
              SIGN UP FREE
            </AntButton>
          </Form.Item>
        </CustomForm>
      </Main>
    </>
  )
}

export default SignUp
