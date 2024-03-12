import React, { useState } from 'react';
import { Menu, Drawer } from 'antd';
import { PlusSquareOutlined } from "@ant-design/icons";
import { ProfileDrawer } from '../../ProfileDrawer';
import AppointDrawer from '../../../../components/AppointDrawer/index';
import { MyProfile } from '../../MyProfile';
import '../../Navbar.css';
import MenuDrawer from '../../MenuDrawer/index';
import app from "../assets/app.png";
import addBr from "../assets/addBr.png";
import addSp from "../assets/addS.png";
import work from "../assets/Work.png";
import staff from "../assets/Staff.png";
import service from "../assets/serv.png";
import customer from "../assets/cus.png";
import res from "../assets/res.png";

const fields = [
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

const MenuWithDrawer = () => {
  const [visible, setVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  const handleMenuClick = (e:any) => {
    setSelectedMenuItem(e.key);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
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
        title={<div style={{ display: "flex", alignItems: "center" }}>
           <PlusSquareOutlined className='plusSquare' />
           New Appointment
        </div> }
        placement="right"
        closable={true}
        closeIcon={<div className="custom-close-icon">X</div>}
        visible={visible}
        width={800}
      >
        {<AppointDrawer/>}
        {selectedMenuItem === '1' }
      </Drawer>
    </>
  );
};

export default MenuWithDrawer;
