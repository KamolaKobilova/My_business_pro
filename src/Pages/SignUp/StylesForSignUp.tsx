import styled from "styled-components";
import { Button, Input } from "antd";
export const MainItem = styled.div`
  align-items: center;
  width: auto;
  height: "200px";
`;
export const AntButton = styled(Button)`
  height: 45px;
  width: 100%;
  background-color: #f0483e;
  font-size: 15px;
  font-family: semiBold;
`;
export const AntInput = styled(Input)`
  height: 45px;
  width: 100%;
`;
export const PasswordInpt = styled(Input.Password)`
  height: 45px;
`;
