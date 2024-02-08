import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Container, ProfileSide, Button } from "./stylesForMyProfile";
import { GeneralInformation } from "./MyProfileComponents/GeneralInformation";
import { WorkHours } from "./MyProfileComponents/WorkHours";
import { Services } from "./MyProfileComponents/Services";
import { Settings } from "./MyProfileComponents/Settings";

import user from "../../../assets/users/user.png";

export const MyProfile = () => {
  const [photo, setPhoto] = useState("");
  const [activeButton, setActiveButton] = useState<number | null>(1);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPhoto = event.target.files;
    if (!selectedPhoto || !selectedPhoto.length) return;

    const photoFile = selectedPhoto[0];
    if (selectedPhoto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(photoFile);
    }
  };

  const handlePlusClick = () => {
    document.getElementById("photoInput")?.click();
  };

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };
  return (
    <>
      <Container>
        <ProfileSide>
          <div className="img-block">
            <div className="image-container">
              <div className="photo" onClick={handlePlusClick}>
                {photo ? (
                  <img alt="Profile photo" src={photo} />
                ) : (
                  <div className="placeholder">
                    <img src={user} alt="user" />
                  </div>
                )}
              </div>
              <input
                id="photoInput"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ display: "none" }}
              />
            </div>
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
