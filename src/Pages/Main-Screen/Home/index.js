import React, {useState} from 'react';
import {Button, Input, Modal, Space, Table, Tag} from 'antd';
import {width, height} from '../../../Constant/Size'
import {useAppSelector} from "../../../Store/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {CreateCourseModel} from "./components/CreateCourseModel";
import {useCourseTable} from "../../../Hook/useCourseTable";

const {Search} = Input;

const Home = () => {
  const {account} = useAppSelector(state => state.auth)
  const {courses, loading} = useAppSelector((state) => state.course);
  const [searchText, setSearchText] = useState('');
  const [open, setOpen] = useState(false);
  const {columns, handleDelete, setVisible, visible} = useCourseTable();
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


  return (
    <div className='d-flex flex-column justify-content-between'>
      <Space className='d-flex justify-content-end' style={{marginBottom: 16}}>
        <Search placeholder="Tìm kiếm môn học" onSearch={handleSearch} enterButton/>
        {account?.isAdmin && <Button
          type={"primary"}
          className='flex-fill text-white'
          onClick={showModel}
        >
          Thêm môn học <FontAwesomeIcon className='ps-2' icon={faPlus}/></Button>}
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
      />
      <CreateCourseModel
        title='Thêm môn học'
        open={open}
        show={showModel}
        hide={hideModel}
      />
      <Modal
        title="Delete"
        open={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="back" onClick={() => setVisible(false)}>
            Cancel
          </Button>,
          <Button
            key='delete'
            danger
            loading={loading}
            onClick={handleDelete}
          >
            Delete
          </Button>
        ]}
      >
        <p>Delete course</p>
      </Modal>
    </div>
  );
};

export default Home;
