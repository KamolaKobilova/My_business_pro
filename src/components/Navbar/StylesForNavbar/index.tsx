import styled, { keyframes } from "styled-components";

const colors = {
  back: "#e7ebf0",
  hoverBack: "#eff0ea",
  hoverText: "#5671a1",
};

export const MainContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  background-color: #F8F9FB;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;
export const Block = styled.div`
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left:"-20px";
`;

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  
  gap: 12px;
`;

export const StyledLink = styled.a<{ variant?: string }>`
  color: #010101;
  font-size: 20px;
  font-family: "sans-serif";
  text-decoration: none;
  border-bottom: ${(props) =>
  props.variant === "border" ? "1px solid  black " : "none"};
  &:hover {
    color: ${(props) =>
      props.variant === "error" ? " red " : `${colors.hoverText}`};
  }
`;

export const ArrowIcon = styled.span`
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    color: ${colors.hoverText};
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "grid" : "none")};
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f8f9fb;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
`;
export const DropdownContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: ${colors.back};
  padding: 10px;
  &:hover {
    background-color: ${colors.hoverBack};
  }
`;

export const IconsForNavbar = styled.img`
  height: 50px;
  width: 50px;
`;

export const DropdownMiniBlock = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export const StyledSvg = styled.svg`
  margin-left: 20px;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:hover {
    color: ${colors.hoverText};
  }
`;

export const AdditionalLinksContainer = styled.div<{ isHovered: boolean }>`
  display: ${(props) => (props.isHovered ? "flex" : "none")};
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 60px;
  left: 880px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px;
  z-index: 5;
  background-color: #fff;

  ${StyledSvg}:hover + & {
    display: flex;
  }

  &:hover {
    display: flex;
  }
`;
export const AccauntBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
