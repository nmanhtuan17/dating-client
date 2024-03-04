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
  // const profile = account?.isAdmin ? _student : account;
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
    if (!isFinite(values.parentPhone)) {
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
          form.resetFields();
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
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
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
              rules={[{required: true, message: 'Nhập họ tên'}]}
              initialValue={profile?.fullname}
            >
              <Input placeholder="Họ tên"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Điện thoại"
              name="phone"
              rules={[{required: true, message: 'Nhập số điện thoại'}]}
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
              <Input disabled={!account?.isAdmin || disabled} placeholder="Enter Class Name"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ngành"
              name="major"
              initialValue={profile?.major}
            >
              <Input disabled={!account?.isAdmin || disabled} placeholder="Enter Section"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{required: true, message: 'Please select Gender!'}]}
              initialValue={profile?.gender}
            >
              <Select placeholder="Select Gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
                label="Date Of Birth"
                name="dob"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Date Of Birth!'
                  },
                  ({ getFieldValue }) => ({
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
                        placeholder="Select Date Of Birth"
                    /> :
                    <DatePicker
                        format={'DD/MM/YYYY'}
                        placeholder="Select Date Of Birth"
                        style={{ width: '100%' }}
                    />
              }
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{required: true, message: 'Please enter Address!'}]}
              initialValue={profile?.address}
            >
              <Input placeholder="Enter Address"/>
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item
              label="E-mail"
              name="email"
              rules={[{required: true, message: 'Please enter E-mail!'}]}
              initialValue={profile?.email}
            >
              <Input placeholder="Enter E-mail"/>
            </Form.Item>
          </Col>
        </Row>

        <Title level={4}>Parents Information</Title>

        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              label="Father Name"
              name="fatherName"
              rules={[{required: true, message: 'Please enter Father Name!'}]}
              initialValue={profile?.parent?.fatherName}
            >
              <Input placeholder="Enter Father Name"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Mother Name"
              name="motherName"
              rules={[{required: true, message: 'Please enter Mother Name!'}]}
              initialValue={profile?.parent?.motherName}
            >
              <Input placeholder="Enter Mother Name"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Father Occupation"
              name="fatherJob"
              rules={[{required: true, message: 'Please enter Father Occupation!'}]}
              initialValue={profile?.parent?.fatherJob}
            >
              <Input placeholder="Enter Father Occupation"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Mother Occupation"
              name="motherJob"
              rules={[{required: true, message: 'Please enter Mother Occupation!'}]}
              initialValue={profile?.parent?.motherJob}
            >
              <Input placeholder="Enter Mother Occupation"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              label="Phone Number"
              name="parentPhone"
              rules={[{required: true, message: 'Please enter Phone Number!'}]}
              initialValue={profile?.parent?.parentPhone}
            >
              <Input placeholder="Enter Phone Number"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Nationality"
              name="nation"
              rules={[{required: true, message: 'Please enter Nationality!'}]}
              initialValue={profile?.parent?.nation}
            >
              <Input placeholder="Enter Nationality"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Present Address"
              name="presentAddress"
              rules={[{required: true, message: 'Please enter Present Address!'}]}
              initialValue={profile?.parent?.presentAddress}
            >
              <Input placeholder="Enter Present Address"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Permanent Address"
              name="permanentAddress"
              rules={[{required: true, message: 'Please enter Permanent Address!'}]}
              initialValue={profile?.parent?.permanentAddress}
            >
              <Input placeholder="Enter Permanent Address"/>
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
    </div>
  );
}

export default StudentImformation;
