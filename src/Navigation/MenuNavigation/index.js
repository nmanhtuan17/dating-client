import React, { useState } from 'react';
import type, {DrawerProps, Menu, RadioChangeEvent} from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';
import {colors} from "../../Constant/Colors";
import Sider from "antd/es/layout/Sider";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faHouse, faStar} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  {
    key: 'tkb',
    label: (<Link to='/home'>
      <div>
        <FontAwesomeIcon icon={faHouse} />
        <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Trang chủ</h4>
      </div>
    </Link>),
  },
  {
    key: 'scores',
    label: (<Link to='/scores'>
      <div>
        <FontAwesomeIcon icon={faStar} />
        <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Bảng điểm</h4>
      </div>
    </Link>),
  },
  {
    key: 'tuition',
    label: (<Link to='/tuition'>
      <div>
        <FontAwesomeIcon icon={faStar} />
        <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Học Phí</h4>
      </div>
    </Link>),
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
