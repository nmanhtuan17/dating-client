import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {Avatar, Breadcrumb, Col, Dropdown, Image, Layout, Menu, Row, Space} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {colors} from "../../Constant/Colors";
import MenuNavigation from "../../Navigation/MenuNavigation";
import UserInfo from "../../Components/UserInfo";
import {Content, Header} from "antd/es/layout/layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {useAppDispatch} from "../../Store/store";
import {logout} from "../../Store/Slice/auth.slice";
import Schedule from "../../Components/Layout/Schedule";

const items = [
  {
    label: <a href="#">
      <FontAwesomeIcon icon={faUser}/>
      <span style={{margin: '4px 6px'}}>Thông tin cá nhân</span>
    </a>,
    key: '1',
  },
  {
    label: <a href="#">
      <FontAwesomeIcon icon={faUser}/>
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
const RootLayout = () => {
  const dispatch = useAppDispatch()
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
        <Dropdown menu={{items, onClick: handleLogout}} placement="bottomRight" trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar size={32} icon={<UserOutlined/>}/>
            </Space>
          </a>
        </Dropdown>

      </Header>
      <Layout style={{flex: 1}}>
        <MenuNavigation/>
        <Layout style={{margin: '24px'}}>
          <Row gutter={[24, 24]} style={{flex: 1}}>
            <Col
              xs={{span: 24, order: 2}} lg={{span: 18, order: 1}}
              style={{height: '100%'}}
            >
              <Content style={{minHeight: 280, background: colors.background, borderRadius: 12, padding: 24}}>
                <Outlet/>
              </Content>
            </Col>
            <Col
              xs={{span: 24, order: 1}} lg={{span: 6, order: 2}}
            >
              <UserInfo/>
              {/*<Schedule/>*/}
            </Col>

          </Row>
        </Layout>

      </Layout>
    </Layout>
  )
}

export default RootLayout
