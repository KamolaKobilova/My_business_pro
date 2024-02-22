import React, { useState } from "react";
import { Button } from "antd";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  MainContainer,
  SideContainer,
  StaffBUtton,
  StaffUser,
} from "../ServicesPage/stylesForServices";
import user from "../../../assets/users/user.png";
import AddStaffModal from "../../../components/AddStaffmodal";
import { StaffContainer } from "./StaffComponents/StaffContainer";
import {
  setActiveIndex,
  deleteStaffMember,
  addStaffMember,
} from "../../../redux/StaffPageReducer/authSlice";

export const StaffPage = () => {
  const dispatch = useDispatch();
  const staffData = useSelector((state: any) => state.staff.staffData);
  const activeIndex = useSelector((state: any) => state.staff.activeIndex);
  const [modal, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((state) => !state);
  const handleAddStaff = (staffMember: any) => {
    dispatch(addStaffMember(staffMember));
  };

  const handleDeleteStaff = (index: number) => {
    dispatch(deleteStaffMember(index));
  };

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
          {staffData.length === 0 ? (
            <p>Add staff</p>
          ) : (
            staffData.map((staff: any, index: number) => (
              <div key={index}>
                <StaffUser
                  active={activeIndex === index}
                  onClick={() => dispatch(setActiveIndex(index))}
                >
                  <img alt="staff-user" src={user} />
                  <div className="staff-user-text">
                    <h3>{staff.name}</h3>
                    <p>{staff.role}</p>
                  </div>
                  <Button size="small" onClick={() => handleDeleteStaff(index)}>
                    Delete
                  </Button>
                </StaffUser>
              </div>
            ))
          )}
        </SideContainer>
        {activeIndex !== null && <StaffContainer />}
      </MainContainer>
      <AddStaffModal
        isOpen={modal}
        onClose={toggleModal}
        onAdd={handleAddStaff}
      />
    </>
  );
};
