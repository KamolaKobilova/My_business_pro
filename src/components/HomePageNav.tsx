import React from "react"
import { useState } from "react"
import { AiOutlineSetting } from "react-icons/ai"
import { FaPlus } from "react-icons/fa"
import { IoMdPerson } from "react-icons/io"
import { IoIosNotificationsOutline } from "react-icons/io"

import {
  NavButton,
  Navbar,
} from "../Pages/MainHomePage/BookingModal/BookingStyles"
import { BookingModal } from "../Pages/MainHomePage/BookingModal"
import { ProfileDrawer } from "../Pages/MainHomePage/ProfileDrawer"
import { Link } from "react-router-dom"

export const HomePageNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDrawerVisible, setDrawerVisible] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const showDrawer = () => {
    setDrawerVisible(true)
  }

  return (
    <div>
      <Navbar>
        <div className="navbar-buttons">
          <div className="navbar">
            <a href="/calendar">
              <NavButton>Calendar</NavButton>
            </a>
            <a href="/services">
              <NavButton>Services</NavButton>
            </a>
            <a href="/staff">
              <NavButton>Staff</NavButton>
            </a>
            <a href="/my-profile">
              <NavButton>My profile</NavButton>
            </a>
            <NavButton onClick={handleOpenModal}>Booking page</NavButton>
            {isModalOpen && <BookingModal onClose={handleCloseModal} />}
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
      <ProfileDrawer
        isDrawerVisible={isDrawerVisible}
        setDrawerVisible={setDrawerVisible}
      />
    </div>
  )
}
