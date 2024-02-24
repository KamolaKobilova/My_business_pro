import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import GoogleButton from "react-google-button";
import { Input } from "antd";
const colors = {
  back: "#fcfcfc",
};
export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;
export const Back = styled.div`
background-image:url('/assets/SignInImg/bg.svg')
  max-width: 1920px;
`;
export const SignInBlock = styled.div`
  width: 900px;
  margin: 30px auto;
  height: auto;
  display: flex;
  padding: 30px;
  background-color: ${colors.back};
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;
export const InputBlock = styled.div`
  width: 600px;

  h1 {
    color: #0e3067;
  }
  p {
    font-size: 20px;
    color: #0e3067;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 40px;
  }

  button {
    width: 360px;
    height: 40px;
    border-radius: 3px;
    background-color: #159aff;
    color: white;
    border: 1px solid #159aff;
    cursor: pointer;
    margin-top: 20px;
    font-size: 20px;
  }
  h3 {
    display: flex;
    color: #0e3067;
    margin-left: 160px;
    margin-top: 20px;
  }
`;
export const CustomInput = styled(Input)`
  width: 350px;
  height: 38px;
  padding-left: 10px;
  border-radius: 3px;
  outline: none;
  label {
    display: flex;
    flex: 1;
  }
`;
export const CustomPasswordInput = styled(Input.Password)`
  width: 350px;
  height: 38px;
  padding-left: 10px;
  border-radius: 3px;
  outline: none;
  label {
    display: flex;
    flex: 1;
  }
`;

export const StyledCard = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
`;

export const StyledCaption = styled.div`
  font-size: 20px;
  color: #0e3067;
  display: flex;
  font-weight: 10px;
  flex-direction: column;
`;
export const CustomCarousel = styled(Carousel)`
  max-width: 450px;
  height: auto;
`;
export const StyledImg = styled.img`
  width: 80px;
  height: 360px;
  border-radius: 200px, 0 0 20px;
`;
export const StyledGoogleButton = styled(GoogleButton)`
  display: flex;
  font-size: 20px;
  margin: 20px 0 0 55px;
`;
