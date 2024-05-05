import {Divider, Space} from "antd";

export const TabHeader = ({title}) => {
  return (
    <Space>
      <Space className='fw-bold, fs-4'>{title}</Space>
    </Space>
  )
}
