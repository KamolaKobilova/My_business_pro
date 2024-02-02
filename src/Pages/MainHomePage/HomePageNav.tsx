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
        <a href="/calendar">
          <NavButton>Calendar</NavButton>
        </a>
        <NavButton>Services</NavButton>
        <NavButton>Staff</NavButton>
        <a href="/my-profile">
          <NavButton>My profile</NavButton>
        </a>
        <NavButton onClick={handleOpenModal}>Booking page</NavButton>
        {isModalOpen && <CalendarModal onClose={handleCloseModal} />}
      </Navbar>
    </div>
  );
};
