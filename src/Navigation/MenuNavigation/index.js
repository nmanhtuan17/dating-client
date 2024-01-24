import React, { useState } from 'react';
import type, {DrawerProps, Menu, RadioChangeEvent} from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';
import {colors} from "../../Constant/Colors";
import Sider from "antd/es/layout/Sider";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faHouse, faMoneyBill, faStar} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  {
    key: 'home',
    label: (<Link to='/home'>
      <div>
        <FontAwesomeIcon icon={faHouse} />
        <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Trang chủ</h4>
      </div>
    </Link>),
  },
  {
    key: 'insertSubject',
    label: (<Link to='/insertSubject'>
      <div>
        <FontAwesomeIcon icon={faStar} />
        <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Quản lí môn học</h4>
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
        <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Học phí</h4>
      </div>
    </Link>),
  },
  {
    key: 'insertStudents',
    label: (<Link to='/insertStudents'>
      <div>
        <FontAwesomeIcon icon={faStar} />
        <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Thêm, Xóa sinh viên</h4>
      </div>
    </Link>),
  },
  {
    key: 'studentList',
    label: (<Link to='/studentList'>
      <div>
        <FontAwesomeIcon icon={faStar} />
        <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Quản lí sinh viên</h4>
      </div>
    </Link>),
  },
  {
    key: 'registerSubject',
    label: (<Link to='/registerSubject'>
      <div>
        <FontAwesomeIcon icon={faStar} />
        <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Đăng kí học</h4>
      </div>
    </Link>),
  },

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
        defaultSelectedKeys={['home']}
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
