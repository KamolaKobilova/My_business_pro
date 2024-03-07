import styled from "styled-components";
import { Button, Form, InputNumber, Select, Steps, TimePicker } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { Step } = Steps;
const { Option } = Select;
const mainPurple = "#4f4a7b";

export const Navbar = styled.nav`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  background-color: ${mainPurple};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  .navbar-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    margin-right: 18px;
  }
  .navbar-buttons .navbar {
    display: flex;
    gap: 20px;
  }
  .navbar-buttons .push-settings {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .navbar-buttons .push-settings .user-image {
    border: 1px solid #ddd;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    display: flex;
    align-items: center;
  }
`;
export const ButtonNext = styled.nav`
  display: flex;
  height: 22px;
  width: 100px;
  padding: 11.5px 15px;
  justify-content: center;
  align-items: center;
  gap: 0.595px;
  background-color: #4f4a7b;
  color: white;
  border-radius: 2px;
  margin-left: 220px;
  margin-top: 40px;
`;
export const Title = styled.div`
  h3 {
    color: #333333;
    font-family: "Inter";
    margin: 0 0 20px 20px;
    font-size: 18px;
  }
  p {
    max-width: 290px;
    font-family: Inter;
    font-size: 13.563px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin: 20px, 0 0 20px;
  }
`;
export const CustomSteps = styled(Steps)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 250px;
  height: 120px;
  .ant-steps-item:first-child {
    margin: 0 0 0 10px;
  }
`;

export const Input = styled.div`
  margin-top: 30px;
  input,
  select {
    width: 342px;
    height: 40px;
    margin-bottom: 30px;
    margin-top: 10px;
    border-radius: 3px;
    border: 1px solid;
    color: #111111;
  }

  label {
    font-family: "Inherit";
    font-size: 17.438px;
    margin-bottom: 10px;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 10px;
  img {
    width: 65px;
  }
  h1 {
    margin: 17px 0;
  }
`;
export const CustomForm = styled(Form)`
  .current-step {
    margin: 16px 0;
  }
`;
export const CustomSelector = styled(Select)`
  height: 35px;
`;
export const NextStepButton = styled(Button)`
  width: 100px;
  position: relative;
  top: 35px;
  left: 190px;
  background-color: #4f4a7b;
`;
export const NextPreviousButton = styled(Button)<{ variant: string }>`
  width: 100px;
  position: relative;
  top: 70px;
  left: ${(props) => (props.variant === "left" ? "150px" : "8px")};
  background-color: #4f4a7b;
`;
export const PrevSubmit = styled(Button)<{ variant: string }>`
  width: 100px;
  position: relative;
  top: 120px;
  left: ${(props) => (props.variant === "left" ? "150px" : "8px")};
  background-color: #4f4a7b;
`;
export const CustomTimePicker = styled(TimePicker)`
  width: 190px;
  height: 40px;
`;
export const WeekDaysButton = styled(Button)`
  margin-right: 10px;
  height: 35px;
  border-radius: 15px;
  border-color: #4f4a7b;
  background-color: #dbd9f5;
  margin-bottom: 10px;
`;
export const NavButton = styled.button`
  font-size: 17px;
  font-family: sans-serif;
  background-color: ${mainPurple};
  border: none;
  width: 150px;
  height: 60px;
  color: white;
  &:hover {
    border-bottom: 2px solid red;
  }
`;
export const Circle = styled(ExclamationCircleOutlined)`
  color: rgb(204, 204, 204);
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  height: auto;
  width: 800px;
  border-radius: 10px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 215px;
  left: 1130px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  right: 370px;
`;
export const ModalContainer = styled.div`
  display: flex;

  .switch-block {
    display: flex;
    flex-direction: column;
    background-color: #f9f9fa;
    width: 280px;
    height: 500px;
    border-radius: 10px 0 0 10px;
    padding: 5px 20px;
  }
  .switch-block h1 {
    color: ${mainPurple};
  }
  .switch-block h3 {
    color: ${mainPurple};
    margin-top: 22px;
  }
  .switch-block p {
    margin-top: 0;
  }

  .input-block {
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    padding: 50px;
  }
  .input-block h1 {
    color: ${mainPurple};
    margin-top: 0;
  }
`;
export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .user {
    border: 1px solid #ddd;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .user img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
`;
export const LogOutButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px;
  color: white;
  background-color: ${mainPurple};
  border: none;
  cursor: pointer;
`;
export const CustomInputNumber = styled(InputNumber)`
  width: 180px;
  height: 40px;
`;
