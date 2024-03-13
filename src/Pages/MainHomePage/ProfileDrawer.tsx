import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Drawer } from "antd"
import { logout } from "../../redux/authSlice"
import { LogOutButton, DrawerContent } from "./BookingModal/Style.Booking"
import { useGetUsersQuery } from "../../features/apiSlice"

export const ProfileDrawer = ({ isDrawerVisible, setDrawerVisible }: any) => {
  const { data: userData } = useGetUsersQuery("")
  const user = userData ?? []

  const dispatch = useDispatch()

  const onCloseDrawer = () => {
    setDrawerVisible(false)
  }

  const handleLogout = () => {
    dispatch(logout())
    onCloseDrawer()
  }
  return (
    <Drawer
      title="User Menu"
      placement="right"
      closable={false}
      onClose={onCloseDrawer}
      open={isDrawerVisible}
    >
      <DrawerContent>
        <div className="user">
          <img alt="user" src="" />
        </div>
        <React.Fragment>
          <p>{user.firstName}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </React.Fragment>

        <LogOutButton onClick={handleLogout}>Log out</LogOutButton>
      </DrawerContent>
    </Drawer>
  )
}
