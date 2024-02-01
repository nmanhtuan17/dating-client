import React, {useState} from 'react';
import {Button, Space, Table, Tag} from 'antd';
import {height} from "../../../Constant/Size";
import {useAppSelector} from "../../../Store/store";
import {faPlus, faTrash, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CreateUserModel} from "../../../Components/common/CreateUserModel";
import Search from "antd/es/input/Search";
import useStudentListTable from "../../../Hook/useStudentListTable";

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
        <Button
          type={"primary"}
          className='flex-fill text-white'
          onClick={showModel}
        >
          Thêm sinh viên <FontAwesomeIcon className='ps-2' icon={faPlus}/></Button>
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
