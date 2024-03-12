import React, { useState } from "react"
import { Container, ProfileSide } from "../MyProfile/MyProfile.styles"
import { Tabs } from "antd"
import { FaPlus } from "react-icons/fa"
import { MainContainer, PlusButton, SideContainer } from "./Service.style"
import { ServiceInformation } from "./ServiceComponents/ServiceInformation"
import { StaffAssigned } from "./ServiceComponents/StaffAssigned"
import { ServiceAvailability } from "./ServiceComponents/Avability"
import { ServiceNotifications } from "./ServiceComponents/Notifications"
import { ServicePreferences } from "./ServiceComponents/Preferences"
import { BookingForm } from "./ServiceComponents/BookinfForm"
import PhotoInput from "../../../components/PhotoSelector"
import AddServiceModal from "../../../components/addServiceModal"
import {
  useGetServiceQuery,
  useGetStaffQuery,
} from "../../../features/apiSlice"
import { ServiceValuesType } from "../../../components/ServiceApi"

const { TabPane } = Tabs

export const ServicesPage = () => {
  const { data: serviceData } = useGetServiceQuery("")
  const [photo, setPhoto] = useState("")
  const [activeTab, setActiveTab] = useState("1")
  const [isAddServiceModalOpen, setAddServiceModalOpen] = useState(false)
  const service = serviceData?.payload ?? []

  const handleTabChange = (key: string) => {
    setActiveTab(key)
  }

  const toggleModal = () => {
    setAddServiceModalOpen((state) => !state)
  }

  return (
    <>
      <MainContainer>
        <SideContainer>
          <div className="header">
            <h3>Services</h3>
            <PlusButton onClick={toggleModal}>
              <FaPlus size={15} />
            </PlusButton>{" "}
          </div>
          <div className="service-user">
            <h1>{service.name}</h1>
          </div>
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
      <AddServiceModal isOpen={isAddServiceModalOpen} onClose={toggleModal} />
    </>
  )
}
