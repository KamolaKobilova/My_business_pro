import styled from "styled-components";

const mainPurple = "#4f4a7b";

export const Navbar = styled.nav`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  /* gap: 20px; */
  background-color: ${mainPurple};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  .navbar-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    margin-right: 18px;
  }
  .navbar-buttons .navbar {
    display: flex;
    gap: 20px;
  }
  .navbar-buttons .push-settings {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .navbar-buttons .push-settings .user-image {
    border: 1px solid #ddd;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    display: flex;
    align-items: center;
  }
`;
export const ButtonNext = styled.nav`
  display: flex;
  height: 22px;
  width: 100px;
  padding: 11.5px 15px;
  justify-content: center;
  align-items: center;
  gap: 0.595px;
  background-color: #4f4a7b;
  color: white;
  border-radius: 2px;
  margin-left: 220px;
  margin-top: 40px;
`;
export const Title = styled.div`
  p {
    max-width: 290px;
    font-family: Inter;
    font-size: 13.563px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
`;
export const Input = styled.div`
  margin-top: 30px;
  input,
  select {
    width: 342px;
    height: 40px;
    margin-bottom: 30px;
    margin-top: 10px;
    border-radius: 3px;
    border: 1px solid;
    color: #111111;
  }

  label {
    font-family: "Inherit";
    font-size: 17.438px;
    margin-bottom: 10px;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 10px;
`;

export const NavButton = styled.button`
  color: white;
  font-size: 20px;
  background-color: ${mainPurple};
  border: none;
  width: 150px;
  height: 60px;
  &:hover {
    border-bottom: 4px solid red;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  height: auto;
  width: 800px;
  /* width: auto; */
  /* padding: 20px; */
  border-radius: 10px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 115px;
  left: 1130px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;
export const ModalContainer = styled.div`
  display: flex;

  .switch-block {
    display: flex;
    flex-direction: column;
    background-color: #f9f9fa;
    width: 280px;
    height: 500px;
    border-radius: 10px 0 0 10px;
    padding: 5px 20px;
  }
  .switch-block h1 {
    color: ${mainPurple};
  }
  .switch-block h3 {
    color: ${mainPurple};
    margin-top: 22px;
  }
  .switch-block p {
    margin-top: 0;
  }

  .input-block {
    padding: 10px;
    display: flex;
    flex-direction: column;

    padding: 50px;
  }
  .input-block h1 {
    color: ${mainPurple};
    margin-top: 0;
  }
  .input-block h3 {
  }
`;
