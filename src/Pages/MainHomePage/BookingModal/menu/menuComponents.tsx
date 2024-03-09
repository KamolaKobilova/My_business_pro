import React, { useState } from 'react';
import { Menu, Drawer } from 'antd';
import { PlusSquareOutlined } from "@ant-design/icons";
import { ProfileDrawer } from '../../ProfileDrawer';
import AppointDrawer from '../AppointDrawer';
import '../../Navbar.css';
import app from "../assets/app.png"
import addBr from "../assets/addBr.png"
import addSp from "../assets/addS.png"
import work from "../assets/Work.png"
import staff from "../assets/Staff.png"
import service from "../assets/serv.png"
import customer from "../assets/cus.png"
import res from "../assets/res.png"

type FieldsTypes = {
    key: string;
    icon: JSX.Element; 
    title: string;
  };
  
  const fields: FieldsTypes[] = [
    {
      key: '1',
      icon: <img src={app} alt="Appointment" style={{ width: "35px" }} />,
      title: 'Appointment',
    },
    {
      key: '2',
      icon: <img src={addBr} alt="Add break & block time" style={{ width: "35px" }}/>,
      title: 'Add break & block time',
    },
    {
      key: '3',
      icon: <img src={addSp} alt="Add special working hours" style={{ width: "35px" }}/>,
      title: 'Add special working hours',
    },
    {
      key: '4',
      icon: <img src={work} alt="Workspaces" style={{ width: "35px" }}/>,
      title: 'Workspaces',
    },
    {
      key: '5',
      icon: <img src={staff} alt="Staff" style={{ width: "35px" }}/>,
      title: 'Staff',
    },
    {
      key: '6',
      icon: <img src={service} alt="Service" style={{ width: "35px" }}/>,
      title: 'Service',
    },
    {
      key: '7',
      icon: <img src={customer} alt="Customer" style={{ width: "35px" }}/>,
      title: 'Customer',
    },
    {
      key: '8',
      icon: <img src={res} alt="Reservation" style={{ width: "35px" }}/>,
      title: 'Reservation',
    },
  ];
  
export const MenuWithDrawer = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleMenuClick = (e: any) => {
    if (e.key === '1') {
      setDrawerVisible(true);
    }
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <Menu style={{ width: "260px", height: "400px" }} onClick={handleMenuClick}>
        {fields.map(field => (
          <Menu.Item key={field.key}>
            <div style={{ display: 'flex', alignItems: 'center' }}> 
              {field.icon}
              <span style={{ marginLeft: '8px' }}>{field.title}</span>
            </div>
          </Menu.Item>
        ))}
      </Menu>

      
      <Drawer
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <PlusSquareOutlined 
            className='plusSquare' />
            New Appointment
          </div>
        }
        placement="right"
        closable
        onClose={onCloseDrawer}
        visible={drawerVisible}
        width={900}
        closeIcon={<div className="custom-close-icon">X</div>}
      >
        <ProfileDrawer />
        <AppointDrawer />
      </Drawer>
    </>
  );
};

export default MenuWithDrawer;
