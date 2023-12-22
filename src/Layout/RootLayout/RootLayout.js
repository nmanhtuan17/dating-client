import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {Avatar, Breadcrumb, Col, Image, Layout, Menu, Row, Space} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {colors} from "../../Constant/Colors";
import MenuNavigation from "../../Navigation/MenuNavigation";
import UserInfo from "../../Components/UserInfo";

const {Header, Content, Footer, Sider} = Layout;
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: key,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
  };
});
const RootLayout = () => {
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
        <Space>
          <Avatar size={32} icon={<UserOutlined/>}/>
        </Space>
      </Header>
      <Layout style={{flex: 1}}>
        <MenuNavigation/>
        <Layout style={{margin: '24px'}}>
          <Row gutter={[24, 24]}>
            <Col
              xs={{span: 24, order: 2}} lg={{span: 18, order: 1}}
            >
              <Content style={{minHeight: 280, background: colors.background, borderRadius: 12, padding: 24}}>
                <Outlet/>
              </Content>
            </Col>
            <UserInfo />
          </Row>
        </Layout>

      </Layout>
    </Layout>
  )
}

export default RootLayout
