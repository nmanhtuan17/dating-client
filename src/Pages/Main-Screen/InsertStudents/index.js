import React from 'react';
import {Input, Button, Form, Row, Col} from 'antd';
import {useAppDispatch, useAppSelector} from "../../../Store/store";
import {refreshToken} from "../../../Store/Action/auth.action";
import {ApiService} from "../../../Services/api.service";
import {createUser} from "../../../Store/Action/app.action";
import {toast} from "react-toastify";

const InsertStudents = () => {
  const dispatch = useAppDispatch();
  const {message} = useAppSelector(state => state.app)
  const onFinish = (values) => {
    dispatch(createUser(values)).then(res => {
      if (res?.error?.message === "Rejected") {
        toast.error(res.payload.message)
      }else {
        toast.success("Create success")
      }
    })

  };

  return (
    <div>
      <Form
        name="insertStudentForm"
        onFinish={onFinish}
        layout="vertical"
      >
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item
              label="Mã sinh viên"
              name="msv"
              rules={[{required: true, message: 'Nhập mã sinh viên!'}]}
            >
              <Input placeholder="Mã sinh viên"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Họ tên"
              name="fullname"
              rules={[{required: true, message: 'Vui lòng msv'}]}
            >
              <Input placeholder="Họ tên"/>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              label="Ngày sinh"
              name="birth"
              // rules={[{required: true, message: 'Vui lòng nhập ngày sinh!'}]}
            >
              <Input placeholder="Ngày sinh"/>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              label="Lớp"
              name="class"
              // rules={[{required: true, message: 'Vui lòng nhập số lớp!'}]}
            >
              <Input placeholder="Lớp"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Khóa"
              name="year"
              rules={[{required: true, message: 'Nhập khóa học'}]}
            >
              <Input placeholder="K34"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Ngành học"
              name="major"
              rules={[{required: true, message: 'Nhập ngành học'}]}
            >
              <Input placeholder="Công nghệ thông tin"/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
            >
              <Input placeholder="Email"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Số điện thoại"
              name="phone"
            >
              <Input placeholder="Nhập số điện thoại"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={4}>
            <Form.Item
              label="Cố vấn"
              name="gvcn"
              rules={[{required: true, message: 'Vui lòng nhập mã Cố vấn!'}]}
            >
              <Input placeholder="Mã cố vấn"/>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{background: 'red', borderColor: 'red'}}>
            Thêm sinh viên
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default InsertStudents;
