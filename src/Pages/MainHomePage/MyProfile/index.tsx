import React, { useState } from "react"
import { Tabs } from "antd"
import { Container, ProfileSide, Button } from "./MyProfile.styles"
import { GeneralInformation } from "./MyProfileComponents/GeneralInformation"
import { WorkHours } from "./MyProfileComponents/WorkHours"
import { Services } from "./MyProfileComponents/Services"
import { Settings } from "./MyProfileComponents/Settings"
import PhotoInput from "../../../components/PhotoSelector"
import { useGetUsersQuery } from "../../../features/apiSlice"

const { TabPane } = Tabs

export const MyProfile = () => {
  const [photo, setPhoto] = useState("")
  const [activeTab, setActiveTab] = useState("1")
  const { data: userData } = useGetUsersQuery("")
  const user = userData ?? []
  console.log(user)

  const handleTabChange = (key: string) => {
    setActiveTab(key)
  }

  return (
    <Container>
      <ProfileSide>
        <div className="img-block">
          <PhotoInput onChange={setPhoto} photo={photo} />
          <h3>{user.firstName}</h3>
          <p>{user.isAdmin}</p>
        </div>
        <div className="button-block">
          <Tabs
            activeKey={activeTab}
            onChange={handleTabChange}
            tabPosition="left"
          >
            <TabPane tab="General Information" key="1" />
            <TabPane tab="Work Hours" key="2" />
            <TabPane tab="Services" key="3" />
            <TabPane tab="Booking Page Settings" key="4" />
          </Tabs>
        </div>
      </ProfileSide>
      <div>
        {activeTab === "1" && <GeneralInformation />}
        {activeTab === "2" && <WorkHours />}
        {activeTab === "3" && <Services />}
        {activeTab === "4" && <Settings />}
      </div>
    </Container>
  )
}
