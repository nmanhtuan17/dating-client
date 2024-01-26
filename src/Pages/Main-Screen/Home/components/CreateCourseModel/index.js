import {Button, Col, DatePicker, Form, Input, Modal, Row, TimePicker} from "antd";
import React, {useState} from "react";
import {toast} from "react-toastify";
import {useForm} from "antd/es/form/Form";
import {useAppDispatch, useAppSelector} from "../../../../../Store/store";
import {createUser} from "../../../../../Store/Action/app.action";
import Overlay from "../../../../../Components/Layout/Overlay"
export const CreateCourseModel = ({open, show, hide, title}) => {
  const dispatch = useAppDispatch();
  const {message, isLoading} = useAppSelector(state => state.app)
  const [birthday, setBirth] = useState();
  const [form] = useForm()
  const onFinish = async (values) => {
    await dispatch(createUser({...values, birthday}))
      .then(res => {
        if (res?.error?.message === "Rejected") {
          toast.error(res.payload.message)
        } else {
          toast.success("Create success")
          form.resetFields(['msv', 'fullname', 'class', 'year', 'major', 'email', 'phone', 'gvcn']);
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
      width={1000}
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
        className='pt-4'
      >
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item
              label="Mã môn"
              name="code"
              rules={[{required: true, message: 'Nhập mã môn!!'}]}
            >
              <Input placeholder="Mã môn"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tên môn"
              name="name"
              rules={[{required: true, message: 'Nhập tên môn'}]}
            >
              <Input placeholder="Tên môn"/>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              label="Tên lớp"
              name='className'
              rules={[{required: true}]}
            >
              <Input placeholder="Tên lớp"/>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              label="Tín chỉ"
              name="tc"
              rules={[{required: true}]}
            >
              <Input placeholder="Tín chỉ"/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Ca học"
              name="shift"
              rules={[{required: true}]}
            >
              <TimePicker.RangePicker onChange={(data) => {
                console.log(data)}} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Thứ"
              name="jd"
              rules={[{required: true}]}
            >
              <Input placeholder="Thứ"/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Phòng học"
              name="room"
              rules={[{required: true}]}
            >
              <Input placeholder="Phòng học"/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Giáo viên"
              name="teacher"
              rules={[{required: true}]}
            >
              <Input placeholder="Giáo viên"/>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {isLoading && <Overlay/>}
    </Modal>
  )
}
