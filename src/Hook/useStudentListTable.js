import {Space} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons"
import React from "react";
import {useNavigate} from "react-router-dom";

const useStudentListTable = () => {
  const navigate = useNavigate();

  const clickEdit = (record) => {
    navigate(`/student/details/${record._id}`)
  }
  const renderAction = (_, record) => {
    return (
      <Space size="middle">
        <div className='d-flex gap-2'>
          <span onClick={() => clickEdit(record)}><FontAwesomeIcon icon={faPenToSquare} style={{cursor: 'pointer'}}/></span>
          <span><FontAwesomeIcon className='text-danger' icon={faTrash} style={{cursor: 'pointer'}}/></span>
        </div>
      </Space>
    )
  }
  return [
    {
      title: 'Mã Sinh Viên',
      dataIndex: 'msv',
      key: 'msv',
      width: 100
    },
    {
      title: 'Họ Tên',
      dataIndex: 'fullname',
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
    {
      title: 'Action',
      dataIndex: 'email',
      key: 'email',
      align: 'center',
      render: renderAction
    }
  ]
}

export default useStudentListTable;
