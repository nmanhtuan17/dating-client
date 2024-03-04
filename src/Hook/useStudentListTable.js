import {Modal, Space} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons"
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../Store/store";
import {deleteStudent} from "../Store/Action/app.action";
import {toast} from "react-toastify";

const useStudentListTable = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [studentId, setStudentId] = useState();
  const dispatch = useAppDispatch();
  const showModal = () => {
    setVisible(true);
  };
  const handleDelete = () => {
    dispatch(deleteStudent(studentId)).then(res => {
      if (res.type === "app/delete-student/fulfilled") {
        toast.success(res.payload.message)
      } else {
        toast.error('Delete failed')
      }
      setVisible(false);
    })
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const clickEdit = (record) => {
    navigate(`/student/details/${record._id}`)
  }

  const clickDeleteStudent = (student) => {
    setVisible(true);
    setStudentId(student._id)
  }
  const renderAction = (_, record) => {
    return (
      <Space size="middle">
        <div className='d-flex gap-2'>
          <span onClick={() => clickEdit(record)}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{cursor: 'pointer'}}/>
          </span>
          <span onClick={() => clickDeleteStudent(record)}>
            <FontAwesomeIcon
              className='text-danger' icon={faTrash}
              style={{cursor: 'pointer'}}/>
          </span>
        </div>
      </Space>
    )
  }
  return {
    visible,
    handleDelete, handleCancel,
    columns:
      [
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
        }
        ,
        {
          title: 'Ngày sinh',
          dataIndex: 'dob',
          key: 'dob'
        }
        ,
        {
          title: 'Lớp',
          dataIndex: 'class',
          key: 'class'
        }
        ,
        {
          title: 'Điện Thoại',
          dataIndex: 'phone',
          key: 'phone'
        }
        ,
        {
          title: 'Email SV',
          dataIndex: 'email',
          key: 'email'
        }
        ,
        {
          key: 'action',
          align: 'center',
          render:
          renderAction
        }
      ]
  }
}

export default useStudentListTable;
