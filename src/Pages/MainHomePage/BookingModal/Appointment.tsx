import React from 'react';
import logo from '../../../assets/BookingPage/logo.png';
import {
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalContainer,Header, Title, ButtonNext
  } from "./BookingStyles";

function Appointment() {
  return (
    <div>
       <Header>
           <img src={logo} alt="" style={{width:60}} />
            <h1 style={{marginTop: 14 , fontFamily: "Inter"}}>Bookings</h1>
           </Header>  


    </div>
  )
}

export default Appointment