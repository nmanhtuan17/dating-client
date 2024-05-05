import React, { useState } from 'react';
import { Menu } from 'antd';
import { useAppSelector } from "@/store";
import { useMenu } from '@/hook/useMenu';



const NavBar = () => {
  const data = useMenu();
  return (
    <div className='flex-grow-1'>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={data}
        style={{
          flex: 1,
          minWidth: 300,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
    </div>
  );
};

export default NavBar;
