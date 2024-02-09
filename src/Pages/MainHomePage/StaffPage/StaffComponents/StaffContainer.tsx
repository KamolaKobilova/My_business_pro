import { useState } from "react";
import { Tabs } from "antd";
import {
  Button,
  Container,
  ProfileSide,
} from "../../MyProfile/stylesForMyProfile";

import { StaffInformation } from "./StaffInformation";
import { WorkingHours } from "./WorkingHours";
import { AssignedServices } from "./AssignedServices";
import PhotoInput from "../../../../components/PhotoSelector";

const { TabPane } = Tabs;

export const StaffContainer = () => {
  const [photo, setPhoto] = useState("");
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
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
            <TabPane tab="Staff Information" key="1" />
            <TabPane tab="Working Hours" key="2" />
            <TabPane tab="Assigned Services" key="3" />
          </Tabs>
        </div>
      </ProfileSide>
      {activeTab === "1" && <StaffInformation />}
      {activeTab === "2" && <WorkingHours />}
      {activeTab === "3" && <AssignedServices />}
    </Container>
  );
};
