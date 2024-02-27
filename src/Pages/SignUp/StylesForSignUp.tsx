import styled from "styled-components";
import { Button, Input, Form, Checkbox } from "antd";

export const MainItem = styled.div`
  align-items: center;
  width: auto;
  height: "200px";
  .flex {
    height: 70px;
  }
  img {
    width: 160px;
    height: 44px;
    margin: 10px 12px;
  }
  .left_items {
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin: -40px 30px;
  }
  p {
    margin-right: 15px;
  }
  a {
    text-decoration: none;
    color: #f0483e;
  }
`;
export const Main = styled.div`
  margin-top: 80px;

  h3 {
    max-width: 500px;
    margin: auto;
    font-size: 23px;
    margin-bottom: 30px;
  }
`;
export const AntButton = styled(Button)`
  height: 45px;
  width: 100%;
  background-color: #f0483e;
  font-size: 15px;
  font-family: semiBold;
`;
export const CustomForm = styled(Form)`
  max-width: 500px;
  margin: auto;
`;
export const AntInput = styled(Input)`
  height: 45px;
  width: 100%;
`;
export const PasswordInpt = styled(Input.Password)`
  height: 45px;
`;
export const CustomCheckbox = styled(Checkbox)`
  margin: 10px 10px 10px 0;
`;
