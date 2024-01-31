import React from "react";
import {
  Container,
  ProfileSide,
  ScrollingBlock,
  ScrollingBlockContent,
  ScrollingBlockWrp,
} from "./stylesForMyProfile";
import { ButtonContainer, GeneralInformation } from "./MyProfileLogic";
export const MyProfile = () => {
  return (
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
  );
};
