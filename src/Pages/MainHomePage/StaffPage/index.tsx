import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import {
  MainContainer,
  SideContainer,
  StaffBUtton,
  StaffUser,
} from "../ServicesPage/stylesForServices";
import user from "../../../assets/users/user.png";
import AddStaffModal from "../../../components/AddStaffmodal";
import { StaffContainer } from "./StaffComponents/StaffContainer";

export const StaffPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setActive] = useState<number | null>(1);
  const handleButtonClick = (buttonId: number) => {
    setActive(buttonId);
  };
  const toggleModal = () => setIsModalOpen((state) => !state);
  return (
    <>
      <MainContainer>
        <SideContainer>
          <div className="header">
            <h3>Staff</h3>
            <StaffBUtton onClick={toggleModal}>
              <FaPlus size={14} />
            </StaffBUtton>
          </div>
          <StaffUser
            active={isActive === 1}
            onClick={() => handleButtonClick(1)}
          >
            <img alt="staff-user" src={user} />
            <div className="staff-user-text">
              <h3>Staff Name</h3>
              <p>isAdmin</p>
            </div>
          </StaffUser>
        </SideContainer>
        {isActive === 1 && <StaffContainer />}
      </MainContainer>
      <AddStaffModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};
