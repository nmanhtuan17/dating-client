import React from 'react';
import {Input, Button, Form, Row, Col} from 'antd';
import {useAppDispatch} from "../../../Store/store";
import {refreshToken} from "../../../Store/Action/auth.action";

const InsertStudents = () => {
  const dispatch = useAppDispatch();
  const onFinish = (values) => {
    dispatch(refreshToken()).then(res => {
      console.log("res-----", res)
    })
    console.log('Received values:', values);
  };

  return (
    <div>
      <Form
        name="insertStudentForm"
        onFinish={onFinish}
        layout="vertical"
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Mã sinh viên"
              name="msv"
              rules={[{required: true, message: 'Vui lòng nhập mã sinh viên!'}]}
            >
              <Input placeholder="Nhập mã sinh viên"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Họ tên"
              name="name"
              rules={[{required: true, message: 'Vui lòng nhập họ tên!'}]}
            >
              <Input placeholder="Nhập họ tên"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Ngày sinh"
              name="birth"
              rules={[{required: true, message: 'Vui lòng nhập ngày sinh!'}]}
            >
              <Input placeholder="Nhập số ngày sinh"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Lớp"
              name="class"
              rules={[{required: true, message: 'Vui lòng nhập số lớp!'}]}
            >
              <Input placeholder="Nhập lớp"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Giáo Viên Chủ Nhiệm"
              name="gvcn"
              rules={[{required: true, message: 'Vui lòng nhập giáo Viên Chủ Nhiệm!'}]}
            >
              <Input placeholder="Nhập giáo Viên Chủ Nhiệm"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[{required: true, message: 'Vui lòng nhập số điện thoại!'}]}
            >
              <Input placeholder="Nhập số điện thoại"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email SV"
              name="email"
              rules={[{required: true, message: 'Vui lòng nhập Email SV!'}]}
            >
              <Input placeholder="Nhập Email SV"/>
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
