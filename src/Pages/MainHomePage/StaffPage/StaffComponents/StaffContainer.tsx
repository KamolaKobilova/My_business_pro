import { useState } from "react";
import {
  Button,
  Container,
  ProfileSide,
} from "../../MyProfile/stylesForMyProfile";
import user from "../assets/user.png";
import { StaffInformation } from "./StaffInformation";
import { WorkingHours } from "./WorkingHours";
import { AssignedServices } from "./AssignedServices";

export const StaffContainer = () => {
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
    <Container variant="little">
      <ProfileSide>
        <div className="img-block">
          <div className="image-container">
            <div className="photo" onClick={handlePlusClick}>
              {photo ? (
                <img alt="staff photo" src={photo} />
              ) : (
                <div className="placeholder">
                  <img src={user} alt="staff" />
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
            Staff Information
          </Button>
          <Button
            active={activeButton === 2}
            onClick={() => handleButtonClick(2)}
          >
            Working Hours
          </Button>
          <Button
            active={activeButton === 3}
            onClick={() => handleButtonClick(3)}
          >
            Assigned Services
          </Button>
        </div>
      </ProfileSide>
      {activeButton === 1 && <StaffInformation />}
      {activeButton === 2 && <WorkingHours />}
      {activeButton === 3 && <AssignedServices />}
    </Container>
  );
};
