import React, { useState } from "react";
import {
  Container,
  ProfileSide,
  Button,
} from "../MyProfile/stylesForMyProfile";
import {
  BookingForm,
  ServiceAvailability,
  ServiceInf,
  ServiceNotifications,
  ServicePreferences,
  StaffAssig,
} from "./ServicesPageLogic";
import services from "../../../assets/users/service.png";
import { MainContainer, SideContainer } from "./stylesForServices";

export const ServicesPage = () => {
  const [photo, setPhoto] = useState("");
  const [activeButton, setActiveButton] = useState<number | null>(1);
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPhoto = event.target.files?.[0];

    if (selectedPhoto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(selectedPhoto);
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
                    <img alt="service photo" src={photo} />
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
          {activeButton === 1 && <ServiceInf />}
          {activeButton === 2 && <StaffAssig />}
          {activeButton === 3 && <ServiceAvailability />}
          {activeButton === 4 && <ServiceNotifications />}
          {activeButton === 5 && <ServicePreferences />}
          {activeButton === 6 && <BookingForm />}
        </Container>
      </MainContainer>
    </>
  );
};
