import React from 'react';
import { Space, Table, Tag } from 'antd';
import List from 'rc-virtual-list'
const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt'
  },
  {
    title: 'Mã môn',
    dataIndex: 'mm',
    key: 'mm',
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
    dataIndex: 'thu'
  },
  {
    title: 'Ca học',
    key: 'ca',
    dataIndex: 'ca'
  },
  {
    title: 'Phòng học',
    key: 'room',
    dataIndex: 'room'
  },
  {
    title: 'Tín chỉ',
    key: 'tc',
    dataIndex: 'tc'
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
    stt: 10,
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
  return (
    <div style={{flex: 1}}>
      <Table columns={columns} dataSource={data} scroll={{
        y: 240,
      }}
      size="small"
      />

    </div>
  );
};

export default Home;
