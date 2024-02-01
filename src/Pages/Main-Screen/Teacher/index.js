import {Space, Table} from "antd";
import Search from "antd/es/input/Search";
import {height} from "../../../Constant/Size";
import {CreateUserModel} from "../../../Components/common/CreateUserModel";
import React from "react";
import {useAppSelector} from "../../../Store/store";
const columns = [
  {
    title: 'MGV',
    dataIndex: 'mgv',
    key: 'mgv',
    width: 100
  },
  {
    title: 'Họ Tên',
    dataIndex: 'fullname',
    key: 'name'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Điện thoại',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Bộ môn',
    dataIndex: 'bm',
    key: 'bm'
  },
  {
    title: 'Môn học giảng dạy',
    dataIndex: 'mh',
    key: 'mh'
  }
]
const Teacher = () => {
  const {teacher} = useAppSelector(state => state.app);
  return (
    <div style={{flex: 1}}>
      <Space className='d-flex justify-content-end' style={{marginBottom: 16}}>
        <Search placeholder="Tìm kiếm giáo viên" onSearch={() => {}} enterButton/>
      </Space>
      <Table
        rowKey={(item) => item._id}
        columns={columns}
        dataSource={teacher}
        scroll={{
          y: height * .65,
        }}
        size="small"
        pagination={false}
      />
    </div>
  )
}


export default Teacher
