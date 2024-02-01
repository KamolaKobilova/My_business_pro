import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  StyledLink,
  NavbarContainer,
  LogoBlock,
  ArrowIcon,
  MainContainer,
  StyledSvg,
  AdditionalLinksContainer,
  AccauntBlock,
  Block,
} from "./StylesForNavbar/Styles";
// import { StyledButton } from "../Navbar/StylesForNavbar/";
import SideBar from "./SideBar";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSvgHovered, setSvgHovered] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
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
                <StyledLink onClick={toggleMenu}>Products</StyledLink>
                <ArrowIcon onClick={toggleMenu}>▼</ArrowIcon>
                <StyledLink>Enterprise</StyledLink>
                <StyledLink>Customers</StyledLink>
                <StyledLink>Company</StyledLink>
                <StyledSvg
                  onMouseEnter={() => setSvgHovered(true)}
                  onMouseLeave={() => setSvgHovered(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="5" cy="12" r="1"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                </StyledSvg>
                <AdditionalLinksContainer isHovered={isSvgHovered}>
                  <StyledLink href="#">Blog</StyledLink>
                  <StyledLink href="#" variant="border">
                    Community
                  </StyledLink>
                  <StyledLink href="#">Partner with us</StyledLink>
                  <StyledLink href="#">Support</StyledLink>
                  <StyledLink href="#">Contact us</StyledLink>
                </AdditionalLinksContainer>
              </LogoBlock>
            </div>
          </NavbarContainer>
          <AccauntBlock>
            <NavLink to="/sign-in" style={{ textDecoration: "none" }}>
              <StyledLink variant="error"> Sign in</StyledLink>
            </NavLink>
            <NavLink to="/sign-up" style={{ textDecoration: "none" }}>
              <StyledLink variant="error"> Sign Up</StyledLink>
            </NavLink>
            {/* <NavLink>
            <StyledLink variant="error"> Sign Up</StyledLink>
            </NavLink> */}
            {/* <StyledButton variant="error">Sign up</StyledButton> */}
          </AccauntBlock>
        </Block>
      </MainContainer>
      <SideBar isMenuOpen={isMenuOpen} />
    </>
  );
};

export default Navbar;
