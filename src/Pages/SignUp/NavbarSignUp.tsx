import React from "react"
import { MainItem } from "./StylesForSignUp"
import logo from "../../assets/BookingPage/zoho-logo-web.svg"

export const NavbarSignUp = () => {
  return (
    <MainItem>
      <div className="flex">
        <img src={logo} alt="logo" />
        <div className="left_items">
          <p>Have a Zoho Account?</p>
          <a href="/sign-in">Sign In</a>
        </div>
      </div>
    </MainItem>
  )
}
