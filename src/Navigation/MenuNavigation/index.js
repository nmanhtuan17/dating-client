import React, { useState } from 'react';
import { Menu} from 'antd';
import {colors} from "../../Constant/Colors";
import Sider from "antd/es/layout/Sider";
import useMenu from "../../Hook/useMenu";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faStar} from "@fortawesome/free-solid-svg-icons";


const MenuNavigation = () => {
  const data = useMenu();
  return (
    <Sider style={{background: colors.background, paddingTop: '16px'}} width={250}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['home']}
        style={{
          height: '100%',
          fontWeight: 'bold'
        }}
        items={data}
      />
    </Sider>
  );
};

export default MenuNavigation;
