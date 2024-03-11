import {Button, Col, DatePicker, Form, Input, Modal, Row} from "antd";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../Store/store";
import {createUser} from "../../../Store/Action/app.action";
import {toast} from "react-toastify";
import {useForm} from "antd/es/form/Form";
import Overlay from "../../Layout/Overlay";
import {validateEmail} from "../../../Utils";

export const CreateUserModel = ({open, show, hide, title}) => {
  const dispatch = useAppDispatch();
  const {message, isLoading} = useAppSelector(state => state.app)
  const [birthday, setBirth] = useState();
  const [form] = useForm();

  const onFinish = async (values) => {
    if (!isFinite(values.phone)) {
      toast.error("Phone must be a number")
      return;
    }
    if (!validateEmail(values.email)) {
      toast.error("Email invalid!!!")
      return;
    }
    await dispatch(createUser({...values, dob: birthday}))
      .then(res => {
        if (res?.error?.message === "Rejected") {
          toast.error(res.payload.message)
        } else {
          toast.success("Create success")
          form.resetFields(['msv', 'fullname', 'className', 'year', 'major', 'email', 'phone', 'gvcn']);
          hide()
        }
      })
  };

  const onSubmit = () => {
    form.submit();
  }


  return (
    <Modal
      title={title}
      centered
      open={open}
      onOk={onSubmit}
      onCancel={hide}
      width={1200}
      footer={(_, {OkBtn, CancelBtn}) => !isLoading ? (
        <>
          <CancelBtn/>
          <OkBtn/>
        </>
      ) : (<div></div>)}
    >
      <Form
        form={form}
        name="insertStudentForm"
        onFinish={onFinish}
        layout="vertical"
      >
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              label="Mã sinh viên"
              name="msv"
              rules={[{required: true, message: 'Nhập mã sinh viên!'}]}
            >
              <Input placeholder="Mã sinh viên"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Họ tên"
              name="fullname"
              rules={[{required: true, message: 'Nhập họ tên'}]}
            >
              <Input placeholder="Họ tên"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Ngày sinh"
            >
              <DatePicker format={'DD/MM/YYYY'} style={{width: '100%'}} onChange={(_, date) => setBirth(date)}/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Lớp"
              name="className"
              rules={[{required: true}]}
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
              rules={[{required: true, message: 'Nhập email'}]}
            >
              <Input placeholder="Email"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[{required: true}]}
            >
              <Input placeholder="Nhập số điện thoại"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Cố vấn"
              name="gvcn"
              rules={[{required: true, message: 'Nhập mã Cố vấn!'}]}
            >
              <Input placeholder="Mã cố vấn"/>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {isLoading && <Overlay/>}
    </Modal>
  )
}
