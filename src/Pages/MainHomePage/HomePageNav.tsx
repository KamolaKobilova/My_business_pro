import React from "react";
import { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdPerson} from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Menu, Dropdown, Drawer, Button } from 'antd';
import { NavButton, Navbar } from "./BookingModal/BookingStyles";
import { CalendarModal } from "./BookingModal/BookingPage";
import { ProfileDrawer } from "./ProfileDrawer";
import logo from '../../assets/BookingPage/booking.png';
import MenuWithDrawer from "./BookingModal/menu/menuComponents";
import {PlusOutlined} from "@ant-design/icons";
import './Navbar.css'





export const HomePageNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  
  const menu = (
    <Menu style={{width:"290px", height:"100px"}}>
     
      <Menu.Item key="1" style={{backgroundColor:"#efebeb"}}>Notification!<AiOutlineSetting style={{marginLeft:"170px"}}/></Menu.Item>
      
      <Menu.Item key="2" style={{marginTop:"10px"}}><p>You haven't any reveived messages yet.</p></Menu.Item>
    </Menu>
  );



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
            <Dropdown overlay={<MenuWithDrawer/>} placement="bottomRight" trigger={['click']}>
          <PlusOutlined className="plusOutLined"
            style={{
              fontSize: '24px',
              
            }}
         
          />
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
        <IoIosNotificationsOutline size={25}  className="navItem"/>
    </Dropdown>
            <div className="user-image">
              <IoMdPerson size={28} color="white" onClick={showDrawer}/>
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