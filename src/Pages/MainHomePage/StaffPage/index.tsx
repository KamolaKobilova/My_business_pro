import React, { useState } from "react"
import { Button } from "antd"
import { FaPlus } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import {
  MainContainer,
  SideContainer,
  PlusButton,
  StaffUser,
} from "../ServicesPage/Service.style"
import user from "../../../assets/users/user.png"
import AddStaffModal from "../../../components/AddStaffmodal"
import { StaffContainer } from "./StaffComponents/StaffContainer"
import {
  setActiveIndex,
  deleteStaffMember,
  addStaffMember,
} from "../../../redux/StaffPageReducer/authSlice"
import { RootState } from "../../../redux/store"

interface StaffMember {
  name?: string
  role?: string
}

export const StaffPage = () => {
  const [modal, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const staffData = useSelector((state: RootState) => state.staff.staffData)
  const activeIndex = useSelector((state: RootState) => state.staff.activeIndex)

  const toggleModal = () => setIsModalOpen((state) => !state);

  const handleAddStaff = (staffMember: any) => {
    dispatch(addStaffMember(staffMember))
  }

  const handleDeleteStaff = (index: number) => {
    dispatch(deleteStaffMember(index))
  }

  return (
    <>
      <MainContainer>
        <SideContainer>
          <div className="header">
            <h3>Staff</h3>
            <PlusButton onClick={toggleModal}>
              <FaPlus size={14} />
            </PlusButton>
          </div>
          {staffData.length ? (
            staffData.map((staff: StaffMember, index: number) => (
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
          ) : (
            <p>Add staff</p>
          )}
        </SideContainer>
        {activeIndex !== null && activeIndex >= 0 && <StaffContainer />}
      </MainContainer>
      <AddStaffModal
        isOpen={modal}
        onClose={toggleModal}
        onAdd={handleAddStaff}
      />
    </>
  )
}
