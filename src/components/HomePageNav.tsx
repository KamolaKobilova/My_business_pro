import React from "react"
import { Drawer, Dropdown } from "antd"
import {
  NavButton,
  Navbar,
  DrawerContent,
  LogOutButton,
} from "../Pages/MainHomePage/BookingModal/BookingStyles"
import { useState } from "react"
import { BookingModal } from "../Pages/MainHomePage/BookingModal/index"
import { PlusOutlined, BellOutlined } from "@ant-design/icons"
import { IoIosNotificationsOutline, IoMdPerson } from "react-icons/io"
import { useDispatch } from "react-redux"
import { logout } from "../redux/authSlice"
import logo from "../assets/BookingPage/booking.png"
import { AiOutlineSetting } from "react-icons/ai"
import { SettingOutlined } from "@ant-design/icons"
import Menu from "../Pages/MainHomePage/BookingModal/menu/menuComponents"
import { ProfileDrawer } from "../Pages/MainHomePage/ProfileDrawer"

export const HomePageNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDrawerVisible, setDrawerVisible] = useState(false)
  const dispatch = useDispatch()

  const handleOpenModal = () => {
    setIsModalOpen(true)
    console.log("modal open")
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    console.log("modal closed")
  }

  const showDrawer = () => {
    setDrawerVisible(true)
  }

  const onCloseDrawer = () => {
    setDrawerVisible(false)
  }

  const menu = <Menu />

  return (
    <div>
      <Navbar>
        <div className="navbar-buttons">
          <div className="navbar">
            <NavButton
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <img src={logo} alt="" style={{ width: "30px" }} /> Booking
            </NavButton>
            <a href="/calendar">
              <NavButton>Calendar</NavButton>
            </a>
            <a href="/services">
              <NavButton>Services</NavButton>
            </a>
            <a href="staff">
              {" "}
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
            <Dropdown
              overlay={menu}
              placement="bottomRight"
              trigger={["click"]}
            >
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <PlusOutlined style={{ fontSize: "24px", color: "#F8F8F8" }} />
              </a>
            </Dropdown>
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
