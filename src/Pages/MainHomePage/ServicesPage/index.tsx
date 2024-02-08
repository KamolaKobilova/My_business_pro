import React, { useState } from "react";
import {
  Container,
  ProfileSide,
  Button,
} from "../MyProfile/stylesForMyProfile";

import services from "../../../assets/users/service.png";
import { MainContainer, SideContainer } from "./stylesForServices";
import { ServiceInformation } from "./ServiceComponents/ServiceInformation";
import { StaffAssigned } from "./ServiceComponents/StaffAssigned";
import { ServiceAvailability } from "./ServiceComponents/Avability";
import { ServiceNotifications } from "./ServiceComponents/Notifications";
import { ServicePreferences } from "./ServiceComponents/Preferences";
import { BookingForm } from "./ServiceComponents/BookinfForm";

export const ServicesPage = () => {
  const [photo, setPhoto] = useState("");
  const [activeButton, setActiveButton] = useState<number | null>(1);
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPhoto = event.target.files;
    if (!selectedPhoto || !selectedPhoto.length) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setPhoto(reader.result);
      }
    };
    reader.readAsDataURL(selectedPhoto[0]);
  };

  const handlePlusClick = () => {
    document.getElementById("photoInput")?.click();
  };
  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };
  return (
    <>
      <MainContainer>
        <SideContainer>
          <div className="header">
            <h3>Services</h3>
          </div>
          <div></div>
        </SideContainer>
        <Container variant="little">
          <ProfileSide>
            <div className="img-block-service">
              <div className="image-container">
                <div className="service-photo" onClick={handlePlusClick}>
                  {photo ? (
                    <img src={photo} alt="service photo" />
                  ) : (
                    <div className="service-placeholder">
                      <img src={services} alt="services" />
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
                Service Information
              </Button>
              <Button
                active={activeButton === 2}
                onClick={() => handleButtonClick(2)}
              >
                Staff Assigned
              </Button>
              <Button
                active={activeButton === 3}
                onClick={() => handleButtonClick(3)}
              >
                Service Availability
              </Button>
              <Button
                active={activeButton === 4}
                onClick={() => handleButtonClick(4)}
              >
                Service Notifications
              </Button>
              <Button
                active={activeButton === 5}
                onClick={() => handleButtonClick(5)}
              >
                Service Preferences
              </Button>
              <Button
                active={activeButton === 6}
                onClick={() => handleButtonClick(6)}
              >
                Service Booking Form
              </Button>
            </div>
          </ProfileSide>
          {activeButton === 1 && <ServiceInformation />}
          {activeButton === 2 && <StaffAssigned />}
          {activeButton === 3 && <ServiceAvailability />}
          {activeButton === 4 && <ServiceNotifications />}
          {activeButton === 5 && <ServicePreferences />}
          {activeButton === 6 && <BookingForm />}
        </Container>
      </MainContainer>
    </>
  );
};
