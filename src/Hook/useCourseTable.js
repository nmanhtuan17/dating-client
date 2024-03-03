import {Space} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {useAppDispatch} from "../Store/store";
import {toast} from "react-toastify";
import {deleteCourse, loadCourses} from "../Store/Action/course.action";


export const useCourseTable = () => {
  const [visible, setVisible] = useState(false);
  const [courseId, setCourseId] = useState();
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteCourse(courseId)).then(res => {
      console.log(res)
      if (res.type === "course/delete-course/fulfilled") {
        toast.success(res.payload.message)
        dispatch(loadCourses())
      } else {
        toast.error('Delete failed')
      }
      setVisible(false);
    })
  }
  const clickDeleteCourse = (course) => {
    setVisible(true);
    setCourseId(course._id)
  }
  return {
    visible,
    handleDelete, setVisible,
    columns: [
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
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => {
          return (
            <Space size="middle">
              <div>
                <span onClick={() => clickDeleteCourse(record)}>
                  <FontAwesomeIcon
                    className='text-danger' icon={faTrash}
                    style={{cursor: 'pointer'}}/>
                </span>
              </div>
            </Space>
          )
        }
      }
    ]
  }
}
