import React from "react";
import { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Menu, Dropdown } from 'antd';
import './Navbar.css'
import { NavButton, Navbar } from "./BookingModal/BookingStyles";
import { CalendarModal } from "./BookingModal/BookingPage";
import { ProfileDrawer } from "./ProfileDrawer";
import logo from '../../assets/BookingPage/booking.png';
import {PlusOutlined, BellOutlined, SettingOutlined,CheckSquareOutlined,FieldTimeOutlined,AppstoreOutlined} from "@ant-design/icons";



const menu = (
  <Menu style={{width:"260px", height:"400px"}}>
       <Menu.Item key="1"><CheckSquareOutlined style={{marginRight:"5px"}}/>Appointment</Menu.Item>
       <Menu.Item key="2"><FieldTimeOutlined style={{marginRight:"5px"}}/>Add break & Block time</Menu.Item>
       <Menu.Item key="3"><BellOutlined style={{marginRight:"5px"}}/>Add special working hours</Menu.Item>
       <div style={{width:"200px", marginLeft:"28px"}}> <hr /></div>
       <Menu.Item key="5"><AppstoreOutlined/>Workspaces</Menu.Item>
       <Menu.Item key="6">Staff</Menu.Item>
       <Menu.Item key="7">Service</Menu.Item>
       <Menu.Item key="8">Customer</Menu.Item>
       <Menu.Item key="4">Resources</Menu.Item>
  </Menu>
);

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

  return (
    <div>
      <Navbar>
        <div className="navbar-buttons">
          <div className="navbar">
          <NavButton  style={{display:"flex", alignItems:"center", marginLeft:"10px", color:"white", fontSize:"20px"}}><img src={logo} alt="" style={{width: "30px"}}/> Booking</NavButton>
            <a href="/calendar">
              <NavButton className="navItem">Calendar</NavButton>
            </a>
            <NavButton className="navItem">Services</NavButton>
            <NavButton className="navItem">Staff</NavButton>
            <a href="/my-profile">
              <NavButton className="navItem">My profile</NavButton>
            </a>
            <NavButton className="navItem"  onClick={handleOpenModal}>Booking page</NavButton>
            {isModalOpen && <CalendarModal onClose={handleCloseModal} />}
          </div>
          <div className="push-settings">
          <AiOutlineSetting className="airOut" size={25}  style={{ fontSize: '24px', 
           }}
          
          />
            <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
          <PlusOutlined className="plusOutLined"
            style={{
              fontSize: '24px',
              
            }}
         
          />
        </Dropdown>
            <IoIosNotificationsOutline size={25} className="bell" />
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
  );
};
