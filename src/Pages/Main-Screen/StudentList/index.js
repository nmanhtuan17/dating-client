import React, {useState} from 'react';
import {Button, Space, Table, Tag} from 'antd';
import {height} from "../../../Constant/Size";
import {useAppSelector} from "../../../Store/store";
import {faPlus, faTrash, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CreateUserModel} from "../../../Components/common/CreateUserModel";
import Search from "antd/es/input/Search";
import useStudentListTable from "../../../Hook/useStudentListTable";


// const data = [
//   {
//     stt: 1,
//     msv: "A41957",
//     name: "Nguyễn Thế Anh",
//     birth: "09/12/2003",
//     class: "TT34h2",
//     gvcn: "Đinh Thu Khánh",
//     phone: "0358550285",
//     email: "theanh8703@gmail.com",
//   },
//   {
//     stt: 2,
//     msv: "A41957",
//     name: "Nguyễn Thế Anh",
//     birth: "09/12/2003",
//     class: "TT34h2",
//     gvcn: "Đinh Thu Khánh",
//     phone: "0358550285",
//     email: "theanh8703@gmail.com",
//   },
//   {
//     stt: 3,
//     msv: "A41957",
//     name: "Nguyễn Thế Anh",
//     birth: "09/12/2003",
//     class: "TT34h2",
//     gvcn: "Đinh Thu Khánh",
//     phone: "0358550285",
//     email: "theanh8703@gmail.com",
//   },
//   {
//     stt: 4,
//     msv: "A41957",
//     name: "Nguyễn Thế Anh",
//     birth: "09/12/2003",
//     class: "TT34h2",
//     gvcn: "Đinh Thu Khánh",
//     phone: "0358550285",
//     email: "theanh8703@gmail.com",
//   },
//   {
//     stt: 5,
//     msv: "A41957",
//     name: "Nguyễn Thế Anh",
//     birth: "09/12/2003",
//     class: "TT34h2",
//     gvcn: "Đinh Thu Khánh",
//     phone: "0358550285",
//     email: "theanh8703@gmail.com",
//   }
// ]
const StudentList = () => {
  const columns = useStudentListTable();
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
          Thêm sinh viên <FontAwesomeIcon className='ps-2' icon={faPlus}/></Button>
      </div>
    )
  }

  const handleSearch = (value) => {
    setSearchText(value);
  };

  return (
    <div style={{flex: 1}}>
      <Space className='d-flex justify-content-end' style={{marginBottom: 16}}>
        <Search placeholder="Tìm kiếm sinh viên" onSearch={handleSearch} enterButton/>
      </Space>
      <Table
        rowKey={(item) => item._id}
        columns={columns}
        dataSource={students}
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
