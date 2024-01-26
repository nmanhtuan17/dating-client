import React, {useMemo, useState} from 'react';
import {Button, Input, Space, Table, Tag} from 'antd';
import List from 'rc-virtual-list'
import {width, height} from '../../../Constant/Size'
import {useAppSelector} from "../../../Store/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {CreateUserModel} from "../../../Components/common/CreateUserModel";
import {CreateCourseModel} from "./components/CreateCourseModel";

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
const data = [
  {
    mm: "VC204",
    name: "Các dân tộc Việt Nam",
    className: "DANTOCVN.1",
    thu: 5,
    ca: "3-5",
    room: "B403",
    tc: 3,
    gv: "Nguyễn Anh Cường(MXV036)"
  }
]

const Home = () => {
  const {account} = useAppSelector(state => state.auth)
  const {courses} = useAppSelector((state) => state.course);
  const [searchText, setSearchText] = useState('');
  const [open, setOpen] = useState(false);
  const showModel = () => {
    setOpen(true)
  }
  const hideModel = () => {
    setOpen(false)
  }
  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredData = courses.filter(
    (item) =>
      item.code.toLowerCase().includes(searchText.toLowerCase()) ||
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.className.toLowerCase().includes(searchText.toLowerCase()) ||
      item.teacher.toLowerCase().includes(searchText.toLowerCase())
  );


  const renderFooter = () => {
    return (
      <div className='d-flex pt-4'>
        <Button
          type={"primary"}
          className='flex-fill text-white'
          onClick={showModel}
        >
          Thêm môn học <FontAwesomeIcon className='ps-2' icon={faPlus} size={14}/></Button>
      </div>
    )
  }

  return (
    <div className='d-flex flex-column justify-content-between'>
      <Space className='d-flex justify-content-end' style={{marginBottom: 16}}>
        <Search placeholder="Tìm kiếm môn học" onSearch={handleSearch} enterButton/>
      </Space>
      <Table
        className='flex-fill'
        rowKey={(item) => item._id}
        columns={columns}
        dataSource={filteredData}
        scroll={{
          y: height * 0.65,
        }}
        size="small"
        pagination={false}
        footer={account?.isAdmin ? renderFooter: () => <div></div>}
      />
      <CreateCourseModel
        title='Thêm môn học'
        open={open}
        show={showModel}
        hide={hideModel}
      />
    </div>
  );
};

export default Home;
