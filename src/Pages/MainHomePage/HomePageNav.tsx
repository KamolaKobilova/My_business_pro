import React from "react";
import { Drawer } from "antd";
import { NavButton, Navbar } from "./BookingModal/BookingStyles";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CalendarModal } from "./BookingModal/BookingPage";
import { AiOutlineSetting } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";

export const HomePageNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    console.log("modal open");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log("modal closed");
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div>
      <Navbar>
        <div className="navbar-buttons">
          <div className="navbar">
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
          </div>
          <div className="push-settings">
            <AiOutlineSetting size={25} color="white" />
            <FaPlus size={20} color="white" />
            <IoIosNotificationsOutline size={25} color="white" />
            <div className="user-image">
              <IoMdPerson size={28} color="white" onClick={showDrawer} />
            </div>
          </div>
        </div>
      </Navbar>

      <Drawer
        title="User Menu"
        placement="right"
        closable={false}
        onClose={onCloseDrawer}
        visible={isDrawerVisible}
      >
        <p>Drawer content</p>
      </Drawer>
    </div>
  );
};
