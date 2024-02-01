import React from "react";
import { Container, ProfileSide } from "./stylesForMyProfile";
import { ButtonContainer, GeneralInformation } from "./MyProfileLogic";
import { HomePageNav } from "../HomePageNav";
export const MyProfile = () => {
  return (
    <>
      <Container>
        <ProfileSide>
          <div className="img-block">
            <img alt="Profile photo" src="" />
            <h3>dinora</h3>
            <p>Super admin</p>
          </div>
          <div className="button-block">
            <ButtonContainer />
          </div>
        </ProfileSide>
        <GeneralInformation />
      </Container>
    </>
  );
};
