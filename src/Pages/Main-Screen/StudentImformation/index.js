import React, {useMemo, useState} from 'react';
import {Input, Button, Form, Row, Col, Typography, Select, DatePicker, Upload} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {useAppDispatch, useAppSelector} from "../../../Store/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import dayjs from 'dayjs';
import {toast} from "react-toastify";
import {validateEmail} from "../../../Utils";
import {updateProfile} from "../../../Store/Action/app.action";
import {StudentService} from "../../../Services/student.service";
import {colors} from '../../../Constant/Colors'
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const {Title} = Typography;
const {Option} = Select;


const dateFormat = 'MM/DD/YYYY';
const StudentImformation = ({data}) => {

  const [currentSubject, setCurrentSubject] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [form] = Form.useForm(); // Sử dụng hook useForm để tạo form
  const {account} = useAppSelector(state => state.auth);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useAppDispatch();
  const [_student, setStudent] = useState(data)
  const [mgvs, setMgvs] = useState([]);
  const [mgv, setMgv] = useState('');
  const [editGV, setEditGV] = useState(true);
  const [error, setError] = useState('')
  const profile = useMemo(() => {
    return account?.isAdmin ? _student : account;
  }, [_student])
  const getDetails = async () => {
    try {
      const res = await StudentService.getStudent(_student._id);
      setStudent(res.data)
    } catch (e) {
      console.log(e)
    }
  }
  const onFinish = async (values) => {
    // Xử lý logic khi người dùng submit form
    const dob = `${values.dob.date()}/${values.dob.month()}/${values.dob.year()}`
    if (!isFinite(values.phone)) {
      toast.error("Phone must be a number")
      return;
    }
    if (values.parentPhone && !isFinite(values.parentPhone)) {
      toast.error("Phone must be a number")
      return;
    }
    if (!validateEmail(values.email)) {
      toast.error("Email invalid!!!")
      return;
    }
    await dispatch(updateProfile({
      data: {...values, dob},
      id: profile._id
    }))
      .then(res => {
        if (res?.error?.message === "Rejected") {
          toast.error(res.payload.message)
          setDisabled(true);
        } else {
          toast.success("Update success")
          setDisabled(true);
          if (account.isAdmin) {
            getDetails()
          }
        }
      })
  };

  const onSubmit = () => {
    form.submit();
  }

  const calculateAge = (birthdate) => {
    const today = new Date();
    if (birthdate) {
      return;
    }
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };


  const handleOnPressEnter = () => {
    if (mgvs.indexOf(mgv) !== -1) {
      setError('mã giáo viên đã tồn tại')
      return;
    }
    if (mgv.length > 0) {
      setMgvs([...mgvs, mgv]);
    }
    setError('')
    setMgv('')
  }

  const renderPrefix = () => {
    return <div className='row gap-1 p-1'>
      {mgvs.map((item, index) =>
        <div key={index.toString() + item} className='d-flex align-items-center gap-1 col rounded' style={{background: colors.gray}}>
          <span>{item}</span>
          <span onClick={() => handleDelete(item)} style={{cursor: 'pointer'}}>
            <FontAwesomeIcon icon={faXmark} size={'xs'}/>
          </span>
        </div>
      )}
    </div>
  }
  const handleDelete = (item) => {
    setMgvs(prev => prev.filter(e => e !== item))
  }
  return (
    <div>
      <Row justify={"space-between"} className='mb-2'>
        <Col>
          <Title level={4}>Thông tin cá nhân</Title>
        </Col>
        <Col style={{cursor: 'pointer'}} onClick={() => setDisabled(false)}>
          <FontAwesomeIcon icon={faPenToSquare} size={'lg'}/>
        </Col>
      </Row>
      <Form
        form={form}
        name="insertInfo"
        onFinish={onFinish}
        layout="vertical"
        disabled={disabled}
      >
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              label="Họ tên"
              name="fullname"
              rules={[{required: !account?.isAdmin, message: 'Nhập họ tên'}]}
              initialValue={profile?.fullname}
            >
              <Input placeholder="Họ tên"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Điện thoại"
              name="phone"
              rules={[{required: !account?.isAdmin, message: 'Nhập số điện thoại'}]}
              initialValue={profile?.phone}
            >
              <Input placeholder="Điện thoại"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Lớp"
              name="class"
              initialValue={profile?.class}
            >
              <Input disabled={!account?.isAdmin || disabled} placeholder="Lớp"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ngành"
              name="major"
              initialValue={profile?.major}
            >
              <Input disabled={!account?.isAdmin || disabled} placeholder="Ngành"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              label="Giới tính"
              name="gender"
              rules={[{required: !account?.isAdmin, message: 'require'}]}
              initialValue={profile?.gender}
            >
              <Select placeholder="Giới tính">
                <Option value="male">Nam</Option>
                <Option value="female">Nữ</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ngày sinh"
              name="dob"
              rules={[
                // {
                //   required: !account?.isAdmin,
                //   message: 'Please enter Date Of Birth!'
                // },
                ({getFieldValue}) => ({
                  validator(_, value) {
                    const age = calculateAge(value);
                    if (!value || age < 18) { // Kiểm tra nếu tuổi dưới 18
                      return Promise.reject('Tuổi phải lớn hơn 18.');
                    } else {
                      return Promise.resolve();
                    }
                  },
                }),
              ]}
            >
              {
                disabled ?
                  <Input
                    suffix={<FontAwesomeIcon icon={faCalendar}/>}
                    defaultValue={profile?.dob}
                    placeholder="DD/MM/YYYY"
                  /> :
                  <DatePicker
                    format={'DD/MM/YYYY'}
                    placeholder="DD/MM/YYYY"
                    style={{width: '100%'}}
                  />
              }
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Địa chỉ"
              name="address"
              rules={[{required: !account?.isAdmin, message: 'Please enter Address!'}]}
              initialValue={profile?.address}
            >
              <Input placeholder="Nhập địa chỉ"/>
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item
              label="E-mail"
              name="email"
              rules={[{required: !account?.isAdmin, message: 'Please enter E-mail!'}]}
              initialValue={profile?.email}
            >
              <Input placeholder="Nhập Email"/>
            </Form.Item>
          </Col>
        </Row>

        <Title level={4}>Thông tin phụ huynh</Title>

        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              label="Họ tên bố"
              name="fatherName"
              rules={[{required: !account?.isAdmin, message: 'Please enter Father Name!'}]}
              initialValue={profile?.parent?.fatherName}
            >
              <Input placeholder="Họ tên bố"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Họ tên mẹ"
              name="motherName"
              rules={[{required: !account?.isAdmin, message: 'Please enter Mother Name!'}]}
              initialValue={profile?.parent?.motherName}
            >
              <Input placeholder="Họ tên mẹ"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Nghề nghiệp của bố"
              name="fatherJob"
              rules={[{required: !account?.isAdmin, message: 'require'}]}
              initialValue={profile?.parent?.fatherJob}
            >
              <Input placeholder="Nghề nghiệp của bố"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Nghề nghiệp của mẹ"
              name="motherJob"
              rules={[{required: !account?.isAdmin, message: 'require'}]}
              initialValue={profile?.parent?.motherJob}
            >
              <Input placeholder="Nghề nghiệp của mẹ"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              label="Số điện thoại"
              name="parentPhone"
              rules={[{required: !account?.isAdmin, message: 'require'}]}
              initialValue={profile?.parent?.parentPhone}
            >
              <Input placeholder="Số điện thoại"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Quốc gia"
              name="nation"
              rules={[{required: !account?.isAdmin, message: 'require'}]}
              initialValue={profile?.parent?.nation}
            >
              <Input placeholder="Quốc gia"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Nơi ở hiện tại"
              name="presentAddress"
              rules={[{required: !account?.isAdmin, message: 'require'}]}
              initialValue={profile?.parent?.presentAddress}
            >
              <Input placeholder="Địa chỉ thường trú"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Địa chỉ thường trú"
              name="permanentAddress"
              rules={[{required: !account?.isAdmin, message: 'require'}]}
              initialValue={profile?.parent?.permanentAddress}
            >
              <Input placeholder="Địa chỉ thường trú"/>
            </Form.Item>
          </Col>
        </Row>
        {
          !disabled && <Row justify="start" gutter={16}>
            <Col>
              <Button onClick={() => onSubmit()} type="primary">Save</Button>
            </Col>
            <Col>
              <Button htmlType="button" onClick={() => {
                form.resetFields()
                setDisabled(true)
              }}>Cancel</Button>
            </Col>
          </Row>
        }
      </Form>
      <Row justify={"space-between"} className='mb-2'>
        <Col>
          <Title level={4}>Cố vấn học tập</Title>
        </Col>
        <Col style={{cursor: 'pointer'}} onClick={() => setEditGV(false)}>
          <FontAwesomeIcon icon={faPenToSquare} size={'lg'}/>
        </Col>
      </Row>
      <Input
        value={mgv}
        disabled={editGV}
        prefix={renderPrefix()}
        placeholder="Mã giáo viên"
        onChange={(e) => setMgv(e.target.value)}
        onPressEnter={handleOnPressEnter}
      />
      {error.length > 0 &&
        <p style={{fontSize: 12}} className='text-danger'>{error}</p>
      }
      {
        !editGV && <Row className='mt-2' justify="start" gutter={16}>
          <Col>
            <Button onClick={() => {
            }} type="primary">Save</Button>
          </Col>
          <Col>
            <Button htmlType="button" onClick={() => {
              setEditGV(true)
            }}>Cancel</Button>
          </Col>
        </Row>
      }
    </div>
  );
}

export default StudentImformation;
