import styled from "styled-components"
import { Input, Modal,Select } from "antd"
const { Option } = Select
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
export const CustomSelector = styled(Select)`
  width:342px;
  height:40px;
  margin-left:197px;
`
export const CustomOption = styled(Option)`
  .option{
    display:flex;
    align-items:center;
  }
  img{
    width:20px;}
    p{
      margin-left:8px;
    }
`