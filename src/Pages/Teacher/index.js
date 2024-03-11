import React from 'react';
import {Button, Input, Space, Table, Tag} from 'antd';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useAppSelector} from "../../Store/store";
import {CreateCourseModel} from "../Main-Screen/Home/components/CreateCourseModel";
import {width, height} from '../../Constant/Size'
const {Search} = Input;
const columns = [
  {
    title: 'Mã môn',
    dataIndex: 'code',
    key: 'code',
    width: 70
  },
  {
    title: 'Tên môn',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Tên lớp',
    key: 'className',
    dataIndex: 'className',
  },
  {
    title: 'Thứ',
    key: 'thu',
    dataIndex: 'thu',
    width: 50,
    render: (text, record) => {
      return <div>{record.time.jd}</div>
    }
  },
  {
    title: 'Ca học',
    key: 'ca',
    dataIndex: 'ca',
    width: 60,
    render: (text, record) => {
      return <div>{record.time.shift}</div>
    }
  },
  {
    title: 'Phòng học',
    key: 'room',
    dataIndex: 'room',
    width: 100
  },
  {
    title: 'Tín chỉ',
    key: 'tc',
    dataIndex: 'tc',
    width: 60
  },
  {
    title: 'Giáo viên',
    key: 'teacher',
    dataIndex: 'teacher'
  },
];

const RoleTeacher = () => {
  const {account} = useAppSelector(state => state.auth)
  const allClass = account?.class.map(item => item.course);
  return (
    <div className='d-flex flex-column justify-content-between'>
      <Table
        className='flex-fill'
        rowKey={(item) => item._id}
        columns={columns}
        dataSource={allClass}
        scroll={{
          y: height * 0.65,
        }}
        size="small"
        pagination={false}
      />
    </div>
  );
};

export default RoleTeacher;
