import React, { useState } from 'react';
import type, { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';

const DrawerNavigation = () => {
  const [open, setOpen] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <button className='bg-blue-600 text-white' type="primary" onClick={showDrawer}>
          Open
        </button>
      </Space>
      <Drawer
        title="This is logo"
        placement='left'
        closable={false}
        onClose={onClose}
        open={open}
        key={'left'}
      >
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default DrawerNavigation;
