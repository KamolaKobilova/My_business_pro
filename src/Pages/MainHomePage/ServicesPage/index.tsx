import React, { useState } from "react";
import {
  Container,
  ProfileSide,
  Button,
} from "../MyProfile/stylesForMyProfile";
import { Tabs } from "antd";
import services from "../../../assets/users/service.png";
import { MainContainer, SideContainer } from "./stylesForServices";
import { ServiceInformation } from "./ServiceComponents/ServiceInformation";
import { StaffAssigned } from "./ServiceComponents/StaffAssigned";
import { ServiceAvailability } from "./ServiceComponents/Avability";
import { ServiceNotifications } from "./ServiceComponents/Notifications";
import { ServicePreferences } from "./ServiceComponents/Preferences";
import { BookingForm } from "./ServiceComponents/BookinfForm";
import PhotoInput from "../../../components/PhotoSelector";
const { TabPane } = Tabs;
export const ServicesPage = () => {
  const [photo, setPhoto] = useState("");

  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
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
            <div className="img-block">
              <PhotoInput onChange={setPhoto} photo={photo} />
              <h3>dinora</h3>
              <p>Super admin</p>
            </div>
            <div className="button-block">
              <Tabs
                activeKey={activeTab}
                onChange={handleTabChange}
                tabPosition="left"
              >
                <TabPane tab="Service Information" key="1" />
                <TabPane tab="Staff Assigned " key="2" />
                <TabPane tab="Service Availability" key="3" />
                <TabPane tab="Service Notifications" key="4" />
                <TabPane tab="Service Preferences " key="5" />
              </Tabs>
            </div>
          </ProfileSide>
          {activeTab === "1" && <ServiceInformation />}
          {activeTab === "2" && <StaffAssigned />}
          {activeTab === "3" && <ServiceAvailability />}
          {activeTab === "4" && <ServiceNotifications />}
          {activeTab === "5" && <ServicePreferences />}
          {activeTab === "6" && <BookingForm />}
        </Container>
      </MainContainer>
    </>
  );
};
