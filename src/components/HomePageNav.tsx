import React from "react";
import { Drawer } from "antd";
import {
  NavButton,
  Navbar,
  DrawerContent,
  LogOutButton,
} from "../Pages/MainHomePage/BookingModal/BookingStyles";
import { useState } from "react";
import { BookingModal } from "../Pages/MainHomePage/BookingModal/index";
import { AiOutlineSetting } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Dropdown } from 'antd';
import menuComponents from '../Pages/MainHomePage/BookingModal/menu/menuComponents'
// import logo from '../assets/BookingPage/logo.png';
import {PlusOutlined, BellOutlined, SettingOutlined,CheckSquareOutlined,FieldTimeOutlined,AppstoreOutlined} from "@ant-design/icons";

export const HomePageNav = () => {
 



  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const dispatch = useDispatch();

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
  const handleLogout = () => {
    dispatch(logout());
    onCloseDrawer();
  };

  return (
    <div>
      <Navbar>
        <div className="navbar-buttons">
          <div className="navbar">
          <NavButton style={{display:"flex", alignItems:"center", marginLeft:"10px"}}> Booking</NavButton>
            <a href="/calendar">
              <NavButton>Calendar</NavButton>
            </a>
            <NavButton>Services</NavButton>
            <NavButton>Staff</NavButton>
            <a href="/my-profile">
              <NavButton>My profile</NavButton>
            </a>
            <NavButton onClick={handleOpenModal}>Booking page</NavButton>
            {isModalOpen && < BookingModal onClose={handleCloseModal} />}
          </div>
          <div className="push-settings">
            <AiOutlineSetting size={25} color="white"  style={{ fontSize: '24px', 
            }}
          />  
            <Dropdown  placement="bottomRight" trigger={['click']}>
          <PlusOutlined
            style={{
              fontSize: '24px',
            }}
           onClick={menuComponents}
          />
        </Dropdown>
            <IoIosNotificationsOutline size={25} color="white" style={{
              fontSize: '24px',
            }}
          />
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
        <DrawerContent>
          <div className="user">
            <img alt="user" src="" />
          </div>
          <p>Dinora</p>
          <p>email</p>
          <p>time</p>
          <LogOutButton onClick={handleLogout}>Log out</LogOutButton>
        </DrawerContent>
      </Drawer>
    </div>
  );
};