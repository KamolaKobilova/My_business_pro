import styled from "styled-components"
import { Button } from "antd"
export const ModalContent = styled.div`
  .ant-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
  }

  .ant-input,
  .ant-select {
    width: 100%;
    margin-bottom: 20px;
  }
`
