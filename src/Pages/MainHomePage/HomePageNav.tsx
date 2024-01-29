import React from "react";
import { NavButton, Navbar } from "./BookingModal/BookingStyles";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CalendarModal } from "./BookingModal/BookingPage";

export const HomePageNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    console.log("modal open");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log("modal closed");
  };
  return (
    <div>
      <Navbar>
        <NavLink to="/calendar">
          <NavButton>Calendar</NavButton>
        </NavLink>
        <NavButton>Services</NavButton>
        <NavButton>Staff</NavButton>
        <NavLink to="/my-profile">
          <NavButton>My profile</NavButton>
        </NavLink>
        <NavButton onClick={handleOpenModal}>Booking page</NavButton>
        {isModalOpen && <CalendarModal onClose={handleCloseModal} />}
      </Navbar>
    </div>
  );
};
