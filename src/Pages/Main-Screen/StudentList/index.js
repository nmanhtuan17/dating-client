import React, {useState} from 'react';
import {Button, Space, Table, Tag} from 'antd';
import {height} from "../../../Constant/Size";
import {useAppSelector} from "../../../Store/store";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CreateUserModel} from "../../../Components/common/CreateUserModel";
import Search from "antd/es/input/Search";

const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt'
  },
  {
    title: 'Mã Sinh Viên',
    dataIndex: 'msv',
    key: 'msv'
  },
  {
    title: 'Họ Tên',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'birth',
    key: 'birth'
  },
  {
    title: 'Lớp',
    dataIndex: 'class',
    key: 'class'
  },
  {
    title: 'Giáo Viên Chủ Nhiệm',
    dataIndex: 'gvcn',
    key: 'gvcn'
  },
  {
    title: 'Điện Thoại',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Email SV',
    dataIndex: 'email',
    key: 'email'
  },
];

const data = [
  {
    stt: 1,
    msv: "A41957",
    name: "Nguyễn Thế Anh",
    birth: "09/12/2003",
    class: "TT34h2",
    gvcn: "Đinh Thu Khánh",
    phone: "0358550285",
    email: "theanh8703@gmail.com",
  },
  {
    stt: 2,
    msv: "A41957",
    name: "Nguyễn Thế Anh",
    birth: "09/12/2003",
    class: "TT34h2",
    gvcn: "Đinh Thu Khánh",
    phone: "0358550285",
    email: "theanh8703@gmail.com",
  },
  {
    stt: 3,
    msv: "A41957",
    name: "Nguyễn Thế Anh",
    birth: "09/12/2003",
    class: "TT34h2",
    gvcn: "Đinh Thu Khánh",
    phone: "0358550285",
    email: "theanh8703@gmail.com",
  },
  {
    stt: 4,
    msv: "A41957",
    name: "Nguyễn Thế Anh",
    birth: "09/12/2003",
    class: "TT34h2",
    gvcn: "Đinh Thu Khánh",
    phone: "0358550285",
    email: "theanh8703@gmail.com",
  },
  {
    stt: 5,
    msv: "A41957",
    name: "Nguyễn Thế Anh",
    birth: "09/12/2003",
    class: "TT34h2",
    gvcn: "Đinh Thu Khánh",
    phone: "0358550285",
    email: "theanh8703@gmail.com",
  },
  {
    stt: 6,
    msv: "A41957",
    name: "Nguyễn Thế Anh",
    birth: "09/12/2003",
    class: "TT34h2",
    gvcn: "Đinh Thu Khánh",
    phone: "0358550285",
    email: "theanh8703@gmail.com",
  },
  {
    stt: 7,
    msv: "A41957",
    name: "Nguyễn Thế Anh",
    birth: "09/12/2003",
    class: "TT34h2",
    gvcn: "Đinh Thu Khánh",
    phone: "0358550285",
    email: "theanh8703@gmail.com",
  },
  {
    stt: 8,
    msv: "A41957",
    name: "Nguyễn Thế Anh",
    birth: "09/12/2003",
    class: "TT34h2",
    gvcn: "Đinh Thu Khánh",
    phone: "0358550285",
    email: "theanh8703@gmail.com",
  },
  {
    stt: 9,
    msv: "A41957",
    name: "Nguyễn Thế Anh",
    birth: "09/12/2003",
    class: "TT34h2",
    gvcn: "Đinh Thu Khánh",
    phone: "0358550285",
    email: "theanh8703@gmail.com",
  },
  {
    stt: 10,
    msv: "A41957",
    name: "Nguyễn Thế Anh",
    birth: "09/12/2003",
    class: "TT34h2",
    gvcn: "Đinh Thu Khánh",
    phone: "0358550285",
    email: "theanh8703@gmail.com",
  },
  {
    stt: 11,
    msv: "A41957",
    name: "Nguyễn Thế Anh",
    birth: "09/12/2003",
    class: "TT34h2",
    gvcn: "Đinh Thu Khánh",
    phone: "0358550285",
    email: "theanh8703@gmail.com",
  },
  {
    stt: 12,
    msv: "A41957",
    name: "Nguyễn Thế Anh",
    birth: "09/12/2003",
    class: "TT34h2",
    gvcn: "Đinh Thu Khánh",
    phone: "0358550285",
    email: "theanh8703@gmail.com",
  },
  {
    stt: 13,
    msv: "A41957",
    name: "Nguyễn Thế Anh",
    birth: "09/12/2003",
    class: "TT34h2",
    gvcn: "Đinh Thu Khánh",
    phone: "0358550285",
    email: "theanh8703@gmail.com",
  },
]
const StudentList = () => {
  const {students} = useAppSelector(state => state.app);
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  console.log(students)
  const showModel = () => {
    setOpen(true)
  }
  const hideModel = () => {
    setOpen(false)
  }
  const renderFooter = () => {
    return (
      <div className='d-flex pt-4'>
        <Button
          type={"primary"}
          className='flex-fill text-white'
          onClick={showModel}
        >
          Create user <FontAwesomeIcon className='ps-2' icon={faPlus} size={14}/></Button>
      </div>
    )
  }

  const handleSearch = (value) => {
    setSearchText(value);
  };

  // const filteredData = data.filter(
  //   (item) =>
  //     item.mm.toLowerCase().includes(searchText.toLowerCase()) ||
  //     item.name.toLowerCase().includes(searchText.toLowerCase()) ||
  //     item.className.toLowerCase().includes(searchText.toLowerCase()) ||
  //     item.gv.toLowerCase().includes(searchText.toLowerCase())
  // );
  return (
    <div style={{flex: 1}}>
      <Space className='d-flex justify-content-end' style={{marginBottom: 16}}>
        <Search placeholder="Tìm kiếm sinh viên" onSearch={handleSearch} enterButton/>
      </Space>
      <Table
        rowKey={(item) => item.stt}
        columns={columns}
        dataSource={data}
        scroll={{
          y: height * .65,
        }}
        size="small"
        pagination={false}
        footer={renderFooter}
      />
      <CreateUserModel
        title="Thêm sinh viên"
        open={open}
        show={showModel}
        hide={hideModel}
      />
    </div>
  )
}
export default StudentList
