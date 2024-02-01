import React from "react";
import {Outlet, } from "react-router-dom";
import {Avatar,  Dropdown, Layout, Space} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {colors} from "../../Constant/Colors";
import MenuNavigation from "../../Navigation/MenuNavigation";
import {Content, Header} from "antd/es/layout/layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket, faArrowsRotate} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {store, useAppDispatch, useAppSelector} from "../../Store/store";
import {logout} from "../../Store/Slice/auth.slice";


const RootLayout = () => {
  const dispatch = useAppDispatch();
  const {account} = useAppSelector(state => state.auth)
  const items = [
    {
      label: <a href="#">
        <FontAwesomeIcon icon={faUser}/>
        <span style={{margin: '4px 6px'}}>{account?.fullname}</span>
      </a>,
      key: '1',
    },
    {
      label: <a href="#">
        <FontAwesomeIcon icon={faArrowsRotate}/>
        <span style={{margin: '4px 6px'}}>Đổi mật khẩu</span>
      </a>,
      key: 'changePassword',
    },
    {
      type: 'divider',
    },
    {
      label: <a>
        <FontAwesomeIcon icon={faArrowRightFromBracket}/>
        <span style={{margin: '4px 6px'}}>Logout</span>
      </a>,
      key: 'logout',
    },
  ];
  const handleLogout = (e) => {
    if (e.key === 'logout')
      dispatch(logout())
  }
  return (
    <Layout style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <Header style={{
        display: 'flex',
        alignItems: 'center',
        background: colors.background,
        padding: '0 26px',
        justifyContent: 'space-between',
        boxShadow: '0px 1px 4px -1px rgba(0, 0, 0, .15)'
      }}>
        <div>
          <img
            src='//elearning.thanglong.edu.vn/pluginfile.php/1/theme_monocolor/customloginlogo/1703178122/logo_tlu.svg'
            width={100}/>
        </div>
        <Dropdown
          menu={{items, onClick: handleLogout}}
          placement="bottomRight"
          trigger={['click']}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar size={32} icon={<UserOutlined/>}/>
            </Space>
          </a>
        </Dropdown>

      </Header>
      <Layout style={{flex: 1}}>
        <MenuNavigation/>
        <Layout className='bg-white' style={{margin: '24px', borderRadius: 24}}>
          <Content className='bg-white flex-fill' style={{ padding: 24}}>
            <Outlet/>
          </Content>
        </Layout>

      </Layout>
    </Layout>
  )
}

export default RootLayout

