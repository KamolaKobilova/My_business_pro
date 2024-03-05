import styled from "styled-components"
import { Input, Modal } from "antd"

export const CustomButton = styled.button`
  width: 270px;
  height: 50px;
  margin-top: 20px;
  border-radius: 0;
`
export const AntInput = styled(Input)`
  img {
    width: 20px;
    height: auto;
    margin-right: 5px;
  }
`
export const CustomModal = styled(Modal)`
  footer {
    display: flex;
    justify-content: space-between;
  }
`
