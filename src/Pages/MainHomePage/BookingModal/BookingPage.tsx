import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalContainer,
  Header,
  Title,
  Input,
  ButtonNext,
} from "./BookingStyles";
import logo from "../../../assets/BookingPage/logo.png";

interface CalendarModalProps {
  onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    step: 1,
    name: "",
    timeZone: "",
    currency: "",
  });
  const { step, name, timeZone, currency } = formData;

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   if (e.target.name === 'name' && e.target.value.trim() !== '' && step === 1) {
  //     setFormData({ ...formData, step: step + 1 });
  //   } else if (e.target.name === 'timeZone' && e.target.value.trim() !== '' && step === 2) {
  //     setFormData({ ...formData, step: step + 1 });
  //   } else if (e.target.name === 'currency' && e.target.value.trim() !== '' && step === 3) {
  //     // You can add additional conditions or validation as needed
  //     setFormData({ ...formData, step: step + 1 });
  //   }
  // };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        <ModalContainer>
          <div className="switch-block">
            <Header>
              <img src={logo} alt="" style={{ width: 60 }} />
              <h1 style={{ marginTop: 14, fontFamily: "Inter" }}>Bookings</h1>
            </Header>
            <Title>
              <h3
                style={{
                  color: "#333333",
                  fontFamily: "Inter",
                  marginLeft: 20,
                  fontSize: 18,
                }}
              >
                Hi there, <span>User</span>
              </h3>
              <p style={{ marginLeft: 20, marginTop: 20 }}>
                Welcome to <span>Zoho Bookings.</span> We’ll help you find the
                perfect time with your clients. Give us a little information
                about your business to start with and we’ll fit you right in.
              </p>
            </Title>
          </div>
          <div className="input-block">
            <h3>Tell us</h3>
            <h1>your business</h1>
            <Input>
              <label>Name:</label>
              <br />
              <input type="text" name="name" value={name} />
              <br />
              <label>Time Zone:</label>
              <br />
              <select name="timeZone" value={timeZone}>
                <br />
                <option value="">Select Time Zone</option>
                <option value="GMT">GMT</option>
                <option value="UTC">UTC</option>
                {/* Add more time zones as needed */}
              </select>
              <br />
              <label>Currency:</label>
              <select name="currency" value={currency}>
                <option value="">Select Currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </Input>
            <ButtonNext>Next</ButtonNext>
          </div>
        </ModalContainer>
      </ModalContent>
    </ModalOverlay>
  );
};
