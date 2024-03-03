import React, {useMemo, useState} from 'react';
import {Button, Modal, Space, Table, Tag} from 'antd';
import {height} from "../../../Constant/Size";
import {useAppSelector} from "../../../Store/store";
import {faPlus, faTrash, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CreateUserModel} from "../../../Components/common/CreateUserModel";
import Search from "antd/es/input/Search";
import useStudentListTable from "../../../Hook/useStudentListTable";

const StudentList = () => {
  const {columns, handleDelete, handleCancel, visible} = useStudentListTable();
  const {students, isLoading} = useAppSelector(state => state.app);
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');


  const showModel = () => {
    setOpen(true)
  }
  const hideModel = () => {
    setOpen(false)
  }

  const _students = useMemo(() => {
    return students.filter((item) => item.fullname.toUpperCase().includes(searchText.toUpperCase()))
  }, [searchText])

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
        dataSource={_students}
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
      <Modal
        title="Delete"
        open={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key='delete'
            danger
            loading={isLoading}
            onClick={handleDelete}
          >
            Delete
          </Button>,
        ]}
      >
        <p>Delete student</p>
      </Modal>
    </div>
  )
}
export default StudentList
