import React, { useState } from 'react';
import { Menu } from 'antd';
import { useAppSelector } from "@/store";
import { useMenu } from '@/hook/useMenu';



const NavBar = () => {
  const data = useMenu();
  return (
    <div className='flex flex-1 bg-pink-100'>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={data}
        className={'bg-pink-100'}
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
