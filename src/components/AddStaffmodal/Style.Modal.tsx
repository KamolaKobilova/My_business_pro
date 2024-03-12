import styled from "styled-components"
import { Modal, Button } from "antd"
export const ServiceModal = styled(Modal)`
  /* padding: 30px; */
  .ant-modal-header,
  .ant-modal-footer {
    padding: 20px;
  }
`

export const ModalContent = styled.div`
  .ant-modal-body {
    display: flex;
    justify-content: space-between;
  }
  padding: 20px;
  .ant-input,
  .ant-select {
    width: 100%;
    margin-bottom: 20px;
  }
`
export const CustomButton = styled(Button)`
  width: 60px;
`
