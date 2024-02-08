import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import {
  ScrollingBlockWrp,
  ScrollingBlock,
  ScrollingBlockContent,
  Container,
  ProfileSide,
  Button,
} from "../MyProfile/stylesForMyProfile";
import user from "../../../assets/users/user.png";

export const StaffInformation = () => {
  return (
    <>
      <ScrollingBlockWrp variant="little">
        <div className="header">
          <h3>Set Up Staff Profile</h3>
        </div>
        <ScrollingBlock variant="little">
          <ScrollingBlockContent>
            <h3>Name</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Email Address</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Contact Number</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Primary Workspace</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Role</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Designation</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Date of Birth</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Gender</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Status</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Additional Information</h3>
            <p></p>
          </ScrollingBlockContent>
        </ScrollingBlock>
      </ScrollingBlockWrp>
    </>
  );
};
export const WorkingHours = () => {
  return (
    <>
      <ScrollingBlockWrp variant="little">
        <div className="header">
          <h3>Change work hours</h3>
        </div>
        <ScrollingBlock variant="little">
          <div className="internal-header">
            <h3>Work hours</h3>
          </div>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Monday</p>
            </div>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Tuesday</p>
            </div>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Wednesday</p>
            </div>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Thursday</p>
            </div>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Friday</p>
            </div>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Saturday</p>
            </div>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Sunday</p>
            </div>
          </ScrollingBlockContent>
        </ScrollingBlock>
      </ScrollingBlockWrp>
    </>
  );
};

export const AssignedServices = () => {
  return (
    <ScrollingBlockWrp variant="little">
      <div className="header">
        <h3>Define Your Services</h3>
      </div>
    </ScrollingBlockWrp>
  );
};

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
