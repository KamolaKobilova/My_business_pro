import React, { useState } from "react";
import { Container, ProfileSide, Button } from "./stylesForMyProfile";
import { GeneralInformation } from "./MyProfileComponents/GeneralInformation";
import { WorkHours } from "./MyProfileComponents/WorkHours";
import { Services } from "./MyProfileComponents/Services";
import { Settings } from "./MyProfileComponents/Settings";
import PhotoInput from "../../../components/PhotoSelector";

export const MyProfile = () => {
  const [photo, setPhoto] = useState("");
  const [activeButton, setActiveButton] = useState<number | null>(1);

  const handlePhotoChange = (photoData: any) => {
    setPhoto(photoData);
  };

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };
  return (
    <>
      <Container>
        <ProfileSide>
          <div className="img-block">
            <PhotoInput onChange={handlePhotoChange} photo={photo} />
            <h3>dinora</h3>
            <p>Super admin</p>
          </div>
          <div className="button-block">
            <Button
              active={activeButton === 1}
              onClick={() => handleButtonClick(1)}
            >
              General Information
            </Button>
            <Button
              active={activeButton === 2}
              onClick={() => handleButtonClick(2)}
            >
              Work Hours
            </Button>
            <Button
              active={activeButton === 3}
              onClick={() => handleButtonClick(3)}
            >
              Services
            </Button>
            <Button
              active={activeButton === 4}
              onClick={() => handleButtonClick(4)}
            >
              Booking Page Settings
            </Button>
          </div>
        </ProfileSide>
        {activeButton === 1 && <GeneralInformation />}
        {activeButton === 2 && <WorkHours />}
        {activeButton === 3 && <Services />}
        {activeButton === 4 && <Settings />}
      </Container>
    </>
  );
};
