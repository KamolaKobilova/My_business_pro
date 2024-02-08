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
import { StaffContainer } from "./StaffPageLogic";

export const StaffPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<number | null>(1);
  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <MainContainer>
        <SideContainer>
          <div className="header">
            <h3>Staff</h3>
            <StaffBUtton onClick={openModal}>
              <FaPlus size={14} />
            </StaffBUtton>
          </div>
          <StaffUser
            active={activeButton === 1}
            onClick={() => handleButtonClick(1)}
          >
            <img alt="staff-user" src={user} />
            <div className="staff-user-text">
              <h3>Staff Name</h3>
              <p>isAdmin</p>
            </div>
          </StaffUser>
        </SideContainer>
        {activeButton === 1 && <StaffContainer />}
      </MainContainer>
      <AddStaffModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
