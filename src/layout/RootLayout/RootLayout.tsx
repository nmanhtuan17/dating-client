import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Avatar, Dropdown, Layout, Space } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { colors } from "@/constant/Colors";
import { Content, Header } from "antd/es/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faArrowsRotate, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { store, useAppDispatch, useAppSelector } from "@/store";
import { logout } from "@/store/Slice/auth.slice";
import NavBar from "@/navigation/NavBar";

const RootLayout = () => {
  const dispatch = useAppDispatch();
  const { account } = useAppSelector(state => state.auth)
  const items = [
    {
      label: <Link to="/settings/profile">
        <FontAwesomeIcon icon={faUser} />
        <span style={{ margin: '4px 6px' }}>Thông tin cá nhân
        </span>
      </Link>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: <a>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <span style={{ margin: '4px 6px' }}>Logout</span>
      </a>,
      key: 'logout',
    },
  ];
  const handleLogout = (e) => {
    if (e.key === 'logout')
      dispatch(logout())
  }


  return (
    <div className='flex flex-col h-full'>
      <Header style={{
        display: 'flex',
        alignItems: 'center',
        background: colors.background,
        padding: '0 26px',
        justifyContent: 'space-between',
        boxShadow: '0px 1px 4px -1px rgba(0, 0, 0, .15)'
      }}>
        <div></div>
        <NavBar />
        <Dropdown
          menu={{ items, onClick: handleLogout } as any}
          placement="bottomRight"
          trigger={['click']}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar size={32} icon={<UserOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />} />
            </Space>
          </a>
        </Dropdown>
      </Header>
      <div className='flex flex-1 flex-col flex-grow min-h-0 overflow-y-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout

