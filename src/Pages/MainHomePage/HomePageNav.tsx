import React from "react";
import { NavButton, Navbar, NavRight} from "./BookingModal/BookingStyles";
import { useState } from "react";
import { Menu, Dropdown } from 'antd';
import { CalendarModal } from "./BookingModal/BookingPage";

import {PlusOutlined, BellOutlined, SettingOutlined,CheckSquareOutlined,FieldTimeOutlined,AppstoreOutlined} from "@ant-design/icons";
import logo from '../../assets/BookingPage/booking.png'



export const HomePageNav = () => {

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
        

  


  const [isHovered, setIsHovered] = useState(false);
  const [isCHanged, setIsChanged] = useState(false);
  const [isCHanging, setIsChanging] = useState(false);

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
    <Navbar>
      <div></div>
      <NavButton style={{display:"flex", alignItems:"center"}}><img src={logo} alt="" style={{width: "30px"}}/> Booking</NavButton>
      <NavButton style={{ color: isCHanging ? '#F8F8F8' : '#D3D3D3'}} 
      onMouseEnter={() => setIsChanging(true)}
      onMouseLeave={() => setIsChanging(false)}
      >Calendar</NavButton>
      <NavButton>Services</NavButton>
      <NavButton>Staff</NavButton>
      <NavButton>My profile</NavButton>
      <NavButton onClick={handleOpenModal}>Booking page</NavButton>
      {isModalOpen && <CalendarModal onClose={handleCloseModal} />}
      <span style={{marginLeft: "700px"}}>
       
        <NavRight>
          <SettingOutlined 
          style={{ fontSize: '24px', 
          color: isCHanged ? '#F8F8F8' : '#D3D3D3'  }}
          onMouseEnter={() => setIsChanged(true)}
          onMouseLeave={() => setIsChanged(false)}
          />
          </NavRight>  
      
        <NavRight> <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
          <PlusOutlined
            style={{
              fontSize: '24px',
              color: isHovered ? '#F8F8F8' : '#D3D3D3',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Dropdown>
        {/* <BellOutlined
         style={{ fontSize: '24px',
         color: isCHanging ? '#F8F8F8' : '#D3D3D3',
         width: '15px'
          }}
          onMouseEnter={() => setIsChanging(true)}
          onMouseLeave={() => setIsChanging(false)}
          /> */}
         </NavRight>  
         <NavRight>
          <img src="" alt="/" style={{width: "140px", height: "100px", borderRadius:"50%", border:"2px solid white"}} />
         </NavRight>
      </span>
    </Navbar>
  );
};