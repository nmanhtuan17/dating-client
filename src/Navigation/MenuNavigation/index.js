import React, { useState } from 'react';
import type, {DrawerProps, Menu, RadioChangeEvent} from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';
import {colors} from "../../Constant/Colors";
import Sider from "antd/es/layout/Sider";
import {Link} from "react-router-dom";

const menuItems = [
  {
    key: 'tkb',
    label: (<Link to='/home'>Home</Link>),
  },
  {
    key: 'bangDiem',
    label: (<Link to='/home'>Bảng điểm</Link>),
  },
  {
    key: 'point',
    label: (<Link to='/sign-in'>Sign In</Link>),
  }
]
const items2 = menuItems.map((item, index) => {
  return {
    key: item.key,
    label: item.label
  };
});
const MenuNavigation = () => {
  const [currentKey, setCurrentKey] = useState('tkb')
  return (
    <Sider style={{background: colors.background, paddingTop: '16px'}} width={250}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['tkb']}
        style={{
          height: '100%',
          fontWeight: 'bold'
        }}
        items={items2}
      />
    </Sider>
  );
};

export default MenuNavigation;
