import React, { useState } from 'react';
import { Menu} from 'antd';
import {colors} from "../../Constant/Colors";
import Sider from "antd/es/layout/Sider";
import useMenu from "../../Hook/useMenu";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faStar} from "@fortawesome/free-solid-svg-icons";
import {useAppSelector} from "../../Store/store";


const MenuNavigation = () => {
  const data = useMenu();
  const {account} = useAppSelector(state => state.auth)
  return (
    <Sider style={{background: colors.background, paddingTop: '16px'}} width={250}>
      <Menu
        mode="inline"
        defaultSelectedKeys={!account?.isGV ? ['home'] : ['class']}
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
