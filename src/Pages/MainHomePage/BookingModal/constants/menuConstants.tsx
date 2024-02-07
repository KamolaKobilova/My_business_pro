import React, { useState } from 'react';
import { Menu, Drawer, Input, Select } from 'antd';
import {PlusSquareOutlined} from "@ant-design/icons";
import { ProfileDrawer } from '../../ProfileDrawer';
import AppointDrawer from '../AppointDrawers';
import { CheckSquareOutlined, FieldTimeOutlined, BellOutlined, AppstoreOutlined } from '@ant-design/icons';
import '../../Navbar.css'




export const MenuWithDrawer = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    
    const handleMenuClick = (e:any) => {
        if (e.key === '1') {
            setDrawerVisible(true);
        }
    };

    const onCloseDrawer = () => {
        setDrawerVisible(false);
    };

    const menu = (
        <Menu style={{ width: "260px", height: "400px" }} onClick={handleMenuClick}>
            <Menu.Item key="1">
                <CheckSquareOutlined style={{ marginRight: "5px" }} />
                Appointment
            </Menu.Item>
            <Menu.Item key="2"><FieldTimeOutlined style={{ marginRight: "5px" }} />Add break & Block time</Menu.Item>
            <Menu.Item key="3"><BellOutlined style={{ marginRight: "5px" }} />Add special working hours</Menu.Item>
            <div style={{ width: "200px", marginLeft: "28px" }}> <hr /></div>
            <Menu.Item key="5"><AppstoreOutlined />Workspaces</Menu.Item>
            <Menu.Item key="6">Staff</Menu.Item>
            <Menu.Item key="7">Service</Menu.Item>
            <Menu.Item key="8">Customer</Menu.Item>
            <Menu.Item key="4">Resources</Menu.Item>
        </Menu>
    );
    const { Option } = Select;

    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState(undefined);
  
    const handleInputChange = (e:any) => {
      setInputValue(e.target.value);
    };
  
    const handleSelectChange = (value:any) => {
      setSelectValue(value);
    };
  

    return (
        <>
            {menu}
            <Drawer
            title={
                <div style={{display:"flex", alignItems:"center"}}>
                  <PlusSquareOutlined style={{ marginRight: "10px", fontSize:"27px", display:"flex", alignItems:"center", color:"white", backgroundColor:"orange" }}/>
                    New Appointment
                </div>
            }
                placement="right"
                closable={true}
                onClose={onCloseDrawer}
                visible={drawerVisible}
                width={900}
                closeIcon={<div className="custom-close-icon">X</div>} 
            >
                
                <ProfileDrawer />
              
      <AppointDrawer/>
      

           


            </Drawer>
        </>
    );
};

export default MenuWithDrawer;
