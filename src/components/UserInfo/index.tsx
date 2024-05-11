import {colors} from "@/constant/Colors";
import {Avatar, Col} from "antd";
import React from "react";
import {Content} from "antd/es/layout/layout";
import {UserOutlined} from "@ant-design/icons";
import {useAppSelector} from '@/store'

const UserInfo = () => {
  const {account} = useAppSelector(state => state.auth)
  return (
    <div
      // xs={{span: 24, order: 1}} lg={{span: 6, order: 2}}
    >
      <Content style={{
        display: 'flex',
        alignItems: 'center',
        padding: '24px 24px',
        minHeight: 150,
        background: colors.background,
        borderRadius: 12
      }}>
        <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
          <div>
            {/* <Avatar size={64} icon={<UserOutlined/>}/> */}
          </div>
          <div style={{fontWeight: '600'}}>
            <h4  style={{ fontSize: 16, marginBottom: '4px'}}>{account?.fullName}</h4>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default UserInfo