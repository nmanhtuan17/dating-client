import React, { useState } from 'react';
import { Input, Button, Form, Row, Col, Modal } from 'antd';




const data = [
    {
        stt: 1,
        msv: "A41957",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"
    },
    {
        stt: 2,
        msv: "A41957",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"

    },
    {
        stt: 3,
        msv: "A41957",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"

    },
    {
        stt: 4,
        msv: "A41957",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"

    },
    {
        stt: 5,
        msv: "A41957",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"

    },
    {
        stt: 6,
        msv: "A41957",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"

    },
    {
        stt: 7,
        msv: "A41957",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"

    },
    {
        stt: 8,
        msv: "A41957",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"

    },
    {
        stt: 9,
        msv: "A41957",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"

    },
    {
        stt: 10,
        msv: "A41957",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"

    },
    {
        stt: 10,
        msv: "A41957",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"

    },
    {
        stt: 10,
        msv: "A41957",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"

    },
    {
        stt: 10,
        msv: "A41954",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"

    },
]

const InsertStudents = () => {
    const [currentStudent, setCurrentStudent] = useState(null);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const onFinish = (values) => {
        // Xử lý logic khi người dùng submit form
        console.log('Received values:', values);
    };

    const findStudentByMSV = (msv) => {
        const student = data.find((item) => item.msv === msv);
        setCurrentStudent(student);
    };

    const handleDelete = () => {
        // Xử lý logic xóa sinh viên ở đây
        console.log('Deleting student:', currentStudent);
        setDeleteModalVisible(false);
    };

    const showDeleteModal = () => {
        setDeleteModalVisible(true);
    };

    const hideDeleteModal = () => {
        setDeleteModalVisible(false);
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
                    <Col span={12}>
                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[{required: true, message: 'Vui lòng cấp mật khẩu cho sinh viên!'}]}
                        >
                            <Input placeholder="Cấp mật khẩu cho sinh viên"/>
                        </Form.Item>
                    </Col>
                </Row>


                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ background: 'red', borderColor: 'red' }}>
                        Thêm sinh viên
                    </Button>
                </Form.Item>


            </Form>
            <Form>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Mã sinh viên để xóa"
                            name="deleteMsv"
                        >
                            <Input placeholder="Nhập mã sinh viên" onBlur={(e) => findStudentByMSV(e.target.value)} />
                        </Form.Item>
                    </Col>

                </Row>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ background: 'red', borderColor: 'red' }} onClick={showDeleteModal}>
                        Xóa sinh viên
                    </Button>
                </Form.Item>
            </Form>
            <Modal
                title="Xác nhận xóa"
                visible={deleteModalVisible}
                onOk={handleDelete}
                onCancel={hideDeleteModal}
            >
                <p>Bạn có chắc chắn muốn xóa sinh viên?</p>
                {currentStudent && (
                    <p>
                        Mã sinh viên: {currentStudent.msv},
                        Họ tên: {currentStudent.name},
                        Ngày sinh: {currentStudent.birth},
                        Lớp: {currentStudent.class},
                        Giá viên chủ nghiệm: {currentStudent.gvcn}
                    </p>
                )}
            </Modal>
        </div>
    )
}

export default InsertStudents;
