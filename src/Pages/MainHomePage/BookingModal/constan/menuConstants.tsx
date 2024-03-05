import React, { useState } from 'react';
import { Menu, Drawer, Input, Select } from 'antd';
import { PlusSquareOutlined } from "@ant-design/icons";
import { ProfileDrawer } from '../../ProfileDrawer';
import AppointDrawer from '../AppointDrawer';
import '../../Navbar.css';
import app from '../assets/app.png';
import addBr from '../assets/addBr.png';
import addSp from '../assets/addS.png';
import work from '../assets/Work.png';
import staff from '../assets/Staff.png';
import service from '../assets/serv.png';
import customer from '../assets/cus.png';
import res from '../assets/res.png'

  type FieldsTypes = {
    key: string,
    icon: string,
    title: string
  }


 const fields = [{
    key: '1',
    icon: '../assets/app.png',
    title: 'Appointment',
},
  {
    key: '2',
    icon: '../assets/addBr.png',
    title: 'Add break & Block time',
  },
{
    key: '3',
    icon: '../assets/addSp.png',
    title: 'Appointment',
},
{
    key: '4',
    icon: '../assets/Work,png',
    title: 'Appointment',
},
{
    key: '5',
    icon: '../assets/Staff.png',
    title: 'Appointment',
},
{
    key: '5',
    icon: '../assets/serv.png',
    title: 'Appointment',
},
{
    key: '6',
    icon: '../assets/cus.png',
    title: 'Appointment',
},
{
    key: '7',
    icon: '../assets/res.png',
    title: 'Appointment',
},
]

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


   
    const { Option } = Select;

    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState(undefined);

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const handleSelectChange = (value: any) => {
        setSelectValue(value);
    };


    return (
        <>
        
            {fields.map((field) => {
                <Menu>
                   <Menu.Item key={field.key}>
                    <img src={field.icon}/>
                    <p>{field.title}</p>
                  </Menu.Item>
                  <Menu.Item key={field.key}>
                     
                  </Menu.Item>
                </Menu>
                    
            })}
            <Drawer
                title={
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <PlusSquareOutlined style={{ marginRight: "10px", fontSize: "27px", display: "flex", alignItems: "center", color: "white", backgroundColor: "orange" }} />
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
