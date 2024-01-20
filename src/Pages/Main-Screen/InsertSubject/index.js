import React from 'react';
import {Space, Table, Tag, Input, Button, Form, Row, Col} from 'antd';

const InsertSubject = () => {
  const onFinish = (values) => {
    // Xử lý logic khi người dùng submit form
    console.log('Received values:', values);
  };

  return (
    <div>
      <Form
        name="insertSubjectForm"
        onFinish={onFinish}
        layout="vertical"
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Mã môn"
              name="mm"
              rules={[{required: true, message: 'Vui lòng nhập mã môn!'}]}
            >
              <Input placeholder="Nhập mã môn"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tên Môn"
              name="name"
              rules={[{required: true, message: 'Vui lòng nhập tên môn!'}]}
            >
              <Input placeholder="Nhập tên môn"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Tên Lớp"
              name="className"
              rules={[{required: true, message: 'Vui lòng nhập tên lớp!'}]}
            >
              <Input placeholder="Nhập tên lớp"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Thứ"
              name="thu"
              rules={[{required: true, message: 'Vui lòng nhập thứ!'}]}
            >
              <Input placeholder="Nhập thứ"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Ca học"
              name="ca"
              rules={[{required: true, message: 'Vui lòng nhập ca học!'}]}
            >
              <Input placeholder="Nhập ca học"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Phòng học"
              name="room"
              rules={[{required: true, message: 'Vui lòng nhập phòng học!'}]}
            >
              <Input placeholder="Nhập phòng học"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Tín chỉ"
              name="tc"
              rules={[{required: true, message: 'Vui lòng nhập tín chỉ!'}]}
            >
              <Input placeholder="Nhập số tín chỉ"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Giáo Viên"
              name="gv"
              rules={[{required: true, message: 'Vui lòng nhập tên giáo viên!'}]}
            >
              <Input placeholder="Nhập tên giáo viên"/>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{background: 'red', borderColor: 'red'}}>
            Thêm môn học
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default InsertSubject;
