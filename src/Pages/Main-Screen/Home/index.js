import React, {useState} from 'react';
import {Button, Input, Space, Table, Tag} from 'antd';
import List from 'rc-virtual-list'
import {width, height} from '../../../Constant/Size'
import {useAppSelector} from "../../../Store/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {CreateUserModel} from "../../../Components/common/CreateUserModel";

const {Search} = Input;
const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    width: 50
  },
  {
    title: 'Mã môn',
    dataIndex: 'mm',
    key: 'mm',
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
    width: 50
  },
  {
    title: 'Ca học',
    key: 'ca',
    dataIndex: 'ca',
    width: 60
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
    key: 'gv',
    dataIndex: 'gv'
  },
];
const data = [
  {
    stt: 1,
    mm: "VC204",
    name: "Các dân tộc Việt Nam",
    className: "DANTOCVN.1",
    thu: 5,
    ca: "3-5",
    room: "B403",
    tc: 3,
    gv: "Nguyễn Anh Cường(MXV036)"
  },
  {
    stt: 2,
    mm: "VC204",
    name: "Các dân tộc Việt Nam",
    className: "DANTOCVN.1",
    thu: 5,
    ca: "6-7",
    room: "B307",
    tc: 3,
    gv: "Nguyễn Anh Cường(MXV036)"
  },
  {
    stt: 3,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.7",
    thu: 3,
    ca: "1-2",
    room: "A709",
    tc: 3,
    gv: "Nguyễn Công Nhân(CTI048)"
  },
  {
    stt: 4,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.8",
    thu: 3,
    ca: "3-5",
    room: "A709",
    tc: 3,
    gv: "Nguyễn Công Nhân(CTI048)"
  },
  {
    stt: 5,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.8",
    thu: 3,
    ca: "6-7",
    room: "A708",
    tc: 3,
    gv: "Nguyễn Công Nhân(CTI048)"
  },
  {
    stt: 6,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.7",
    thu: 3,
    ca: "8-10",
    room: "A708",
    tc: 3,
    gv: "Nguyễn Công Nhân(CTI048)"
  },
  {
    stt: 7,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 3,
    ca: "8-10",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 8,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.9",
    thu: 4,
    ca: "6-8",
    room: "A708",
    tc: 3,
    gv: "Nguyễn Công Nhân(CTI048)"
  },
  {
    stt: 9,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.9",
    thu: 5,
    ca: "4-5",
    room: "A709",
    tc: 3,
    gv: "Nguyễn Công Nhân(CTI048)"
  },
  {
    stt: 10,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 11,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 12,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 13,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 14,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 15,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  },
  {
    stt: 16,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    className: "CSODULIEU.5",
    thu: 5,
    ca: "6-7",
    room: "A709",
    tc: 3,
    gv: "Đinh Thị Thúy(CTI050)"
  }
]

const Home = () => {
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

  const filteredData = data.filter(
    (item) =>
      item.mm.toLowerCase().includes(searchText.toLowerCase()) ||
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.className.toLowerCase().includes(searchText.toLowerCase()) ||
      item.gv.toLowerCase().includes(searchText.toLowerCase())
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
        rowKey={(item) => item.stt}
        columns={columns}
        dataSource={filteredData}
        scroll={{
          y: height * 0.65,
        }}
        size="small"
        pagination={false}
        footer={renderFooter}
      />
      <CreateUserModel
        title='Thêm môn học'
        open={open}
        show={showModel}
        hide={hideModel}
      />
    </div>
  );
};

export default Home;
