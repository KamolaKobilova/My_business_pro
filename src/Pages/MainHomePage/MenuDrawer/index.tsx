import React, { useState } from 'react'; 
import { Drawer } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import AppointDrawer from '../../../components/AppointDrawer'; 

function Index() {
  const [drawerVisible, setDrawerVisible] = useState(false); 

  const onCloseDrawer = () => {
   
    setDrawerVisible(false);
  };

  return (
    <Drawer
      title={
        <div style={{ display: "flex", alignItems: "center" }}>
          <PlusSquareOutlined className='plusSquare' />
          New Appointment
          <AppointDrawer />
        </div>
      }
      placement="right"
      closable
      onClose={onCloseDrawer}
      visible={drawerVisible}
      width={900}
      closeIcon={<div className="custom-close-icon">X</div>}
    >
  
    </Drawer>
  );
}

export default Index;
