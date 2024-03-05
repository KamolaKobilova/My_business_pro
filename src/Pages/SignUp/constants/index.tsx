import { Rule } from "antd/es/form";
import { PasswordInpt } from "../StylesForSignUp";

type SignUpField = {
  label: string;
  name: string;
  rules: Rule[];
  element?: JSX.Element;
};
export const SIGNUP_FIELDS: SignUpField[] = [
  {
    label: "First Name",
    name: "firstName",
    rules: [{ required: true, message: "Please enter your first name!" }],
  },
  {
    label: "Last Name",
    name: "lastName",
    rules: [{ required: true, message: "Please enter your last name!" }],
  },
  {
    label: "Email",
    name: "email",
    rules: [
      { required: true, message: "Please enter your email!" },
      { type: "email", message: "Please enter a valid email address!" },
    ],
  },
  {
    label: "Phone Number",
    name: "phone",
    rules: [{ required: true, message: "Please enter your phone number!" }],
  },
  {
    label: "Password",
    name: "password",
    rules: [{ required: true, message: "Please enter your phone number!" }],
    element: <PasswordInpt />,
  },
];
