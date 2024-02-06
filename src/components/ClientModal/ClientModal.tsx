import React from "react";
import { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  InputWrapper,
  Label,
  Input,
  ButtonWrapper,
  SaveButton,
  CancelButton,
} from "./ModalStyles";

export const ClientModal = ({ isOpen, onClose }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSave = () => {
    console.log("Saved:", { name, email, phoneNumber });
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Register Client</ModalHeader>
            <InputWrapper>
              <Label>Name:</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Email:</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Contact Number:</Label>
              <Input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </InputWrapper>
            <ButtonWrapper>
              <SaveButton onClick={handleSave}>Save</SaveButton>
              <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            </ButtonWrapper>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
