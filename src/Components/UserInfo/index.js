import {colors} from "../../Constant/Colors";
import {Avatar, Col} from "antd";
import React from "react";
import {Content} from "antd/es/layout/layout";
import {UserOutlined} from "@ant-design/icons";

const UserInfo = () => {
  return (
    <Col
      xs={{span: 24, order: 1}} lg={{span: 6, order: 2}}
    >
      <Content style={{display: 'flex', alignItems: 'center', padding: '24px 24px', minHeight: 150, background: colors.background, borderRadius: 12}}>
        <div style={{flexDirection: 'row'}}>
          <Avatar size={50} icon={<UserOutlined/>}/>
          <div style={{display: "inline", paddingLeft: 8, fontSize: 18, fontWeight: '600'}}>Nguyễn Mạnh Tuấn</div>
        </div>
      </Content>
    </Col>
  )
}

export default UserInfo
