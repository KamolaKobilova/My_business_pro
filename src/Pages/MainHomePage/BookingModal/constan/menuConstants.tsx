import React, { useState } from 'react';
import { Menu, Drawer, Input, Select } from 'antd';
import {PlusSquareOutlined} from "@ant-design/icons";
import { ProfileDrawer } from '../../ProfileDrawer';
import AppointDrawer from '../AppointDrawer';
import { CheckSquareOutlined, FieldTimeOutlined, BellOutlined, AppstoreOutlined } from '@ant-design/icons';
import '../../Navbar.css';
import app from  '../assets/app.png';
import addBr from '../assets/addBr.png';
import addSp from '../assets/addS.png';
import work from '../assets/Work.png';
import staff from '../assets/Staff.png';
import service from '../assets/serv.png';
import customer from '../assets/cus.png';
import res from '../assets/res.png'



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
            <Menu.Item key="1" >
                <div style={{display:"flex",alignContent:"center", marginTop:"8px"}}>
                <img src={app} alt="" style={{width:"30px", marginRight:"8px"}} />
                <p style={{marginTop:"4px"}}>Appointment</p>
                </div>
            </Menu.Item>
            <Menu.Item key="2" >
                <div style={{display:"flex",alignContent:"center",marginTop:"8px"}}>
                <img src={addBr} alt="" style={{width:"30px", marginRight:"8px"}} />
                <p style={{marginTop:"4px"}}> Add break & Block time</p>
                </div>
            </Menu.Item>
            
            <Menu.Item key="3" >
                <div style={{display:"flex",alignContent:"center",marginTop:"8px"}}>
                <img src={addSp} alt="" style={{width:"30px", marginRight:"8px"}} />
                <p style={{marginTop:"4px"}}>  Add special working hours</p>
                </div>
            </Menu.Item>
            <div style={{ width: "200px", marginLeft: "28px" }}> <hr /></div>
            <Menu.Item key="4" >
                <div style={{display:"flex",alignContent:"center",marginTop:"8px"}}>
                <img src={work} alt="" style={{width:"30px", marginRight:"8px"}} />
                <p style={{marginTop:"4px"}}> Workspaces</p>
                </div>
            </Menu.Item>
            <Menu.Item key="5" >
                <div style={{display:"flex",alignContent:"center",marginTop:"8px"}}>
                <img src={staff} alt="" style={{width:"30px", marginRight:"8px"}} />
                <p style={{marginTop:"4px"}}>Staff</p>
                </div>
            </Menu.Item>
            <Menu.Item key="6" >
                <div style={{display:"flex",alignContent:"center",marginTop:"8px"}}>
                <img src={service} alt="" style={{width:"30px", marginRight:"8px"}} />
                <p style={{marginTop:"4px"}}>Service</p>
                </div>
            </Menu.Item>
            <Menu.Item key="6" >
                <div style={{display:"flex",alignContent:"center",marginTop:"8px"}}>
                <img src={customer} alt="" style={{width:"30px", marginRight:"8px"}} />
                <p style={{marginTop:"4px"}}>Customer</p>
                </div>
            </Menu.Item>
            <Menu.Item key="6" >
                <div style={{display:"flex",alignContent:"center",marginTop:"8px"}}>
                <img src={res} alt="" style={{width:"30px", marginRight:"8px"}} />
                <p style={{marginTop:"4px"}}>Customer</p>
                </div>
            </Menu.Item>
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
