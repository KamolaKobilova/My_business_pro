import styled from "styled-components";
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
  width: 400px;
  padding: 20px;
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #4f4a7b;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #332f54;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #ccc;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;
