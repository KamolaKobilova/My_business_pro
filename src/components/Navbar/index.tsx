import React from "react"

import { Button } from "antd"
import {
  StyledLink,
  NavbarContainer,
  LogoBlock,
  ArrowIcon,
  MainContainer,
  AccauntBlock,
  Block,
} from "./StylesForNavbar/index"

import { CustomNavlink } from "../HomePage/stylesForHome"

const Navbar = () => {
  return (
    <MainContainer>
      <Block>
        <NavbarContainer>
          <div className="logo-block">
            <LogoBlock>
              <img
                src="/assets/NavbarImg/logo.png"
                alt="Logo"
                style={{ marginRight: "15px" }}
              />
              <StyledLink>Products</StyledLink>
              <StyledLink>Enterprise</StyledLink>
              <StyledLink>Customers</StyledLink>
              <StyledLink>Company</StyledLink>
            </LogoBlock>
          </div>
        </NavbarContainer>
        <AccauntBlock className="block">
          <CustomNavlink to="/sign-in">
            <Button>SIGN IN </Button>
          </CustomNavlink>
          <CustomNavlink to="/sign-up" style={{ textDecoration: "none" }}>
            <Button>SIGN UP</Button>
          </CustomNavlink>
        </AccauntBlock>
      </Block>
    </MainContainer>
  )
}

export default Navbar
