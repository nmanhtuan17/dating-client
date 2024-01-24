import React, { useState } from 'react';
import {Input, Button, Form, Row, Col, Modal} from 'antd';


const data = [
    {
        stt: 1,
        mm: "VC204",
        name: "Các dân tộc Việt Nam",
        className: "DANTOCVN.1",
        thu: 5,
        ca: "3-5",
        room: "B403",
        tc: 3,
        gv: "Nguyễn Anh Cường(MXV036)"
    },
    {
        stt: 2,
        mm: "VC204",
        name: "Các dân tộc Việt Nam",
        className: "DANTOCVN.1",
        thu: 5,
        ca: "6-7",
        room: "B307",
        tc: 3,
        gv: "Nguyễn Anh Cường(MXV036)"
    },
    {
        stt: 3,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.7",
        thu: 3,
        ca: "1-2",
        room: "A709",
        tc: 3,
        gv: "Nguyễn Công Nhân(CTI048)"
    },
    {
        stt: 4,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.8",
        thu: 3,
        ca: "3-5",
        room: "A709",
        tc: 3,
        gv: "Nguyễn Công Nhân(CTI048)"
    },
    {
        stt: 5,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.8",
        thu: 3,
        ca: "6-7",
        room: "A708",
        tc: 3,
        gv: "Nguyễn Công Nhân(CTI048)"
    },
    {
        stt: 6,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.7",
        thu: 3,
        ca: "8-10",
        room: "A708",
        tc: 3,
        gv: "Nguyễn Công Nhân(CTI048)"
    },
    {
        stt: 7,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.5",
        thu: 3,
        ca: "8-10",
        room: "A709",
        tc: 3,
        gv: "Đinh Thị Thúy(CTI050)"
    },
    {
        stt: 8,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.9",
        thu: 4,
        ca: "6-8",
        room: "A708",
        tc: 3,
        gv: "Nguyễn Công Nhân(CTI048)"
    },
    {
        stt: 9,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.9",
        thu: 5,
        ca: "4-5",
        room: "A709",
        tc: 3,
        gv: "Nguyễn Công Nhân(CTI048)"
    },
    {
        stt: 10,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.5",
        thu: 5,
        ca: "6-7",
        room: "A709",
        tc: 3,
        gv: "Đinh Thị Thúy(CTI050)"
    },
    {
        stt: 11,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.5",
        thu: 5,
        ca: "6-7",
        room: "A709",
        tc: 3,
        gv: "Đinh Thị Thúy(CTI050)"
    },
    {
        stt: 12,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.5",
        thu: 5,
        ca: "6-7",
        room: "A709",
        tc: 3,
        gv: "Đinh Thị Thúy(CTI050)"
    },
    {
        stt: 13,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.5",
        thu: 5,
        ca: "6-7",
        room: "A709",
        tc: 3,
        gv: "Đinh Thị Thúy(CTI050)"
    },
    {
        stt: 14,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.5",
        thu: 5,
        ca: "6-7",
        room: "A709",
        tc: 3,
        gv: "Đinh Thị Thúy(CTI050)"
    },
    {
        stt: 15,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.5",
        thu: 5,
        ca: "6-7",
        room: "A709",
        tc: 3,
        gv: "Đinh Thị Thúy(CTI050)"
    },
    {
        stt: 16,
        mm: "IS222",
        name: "Cơ sở dữ liệu",
        className: "CSODULIEU.5",
        thu: 5,
        ca: "6-7",
        room: "A709",
        tc: 3,
        gv: "Đinh Thị Thúy(CTI050)"
    }
]

const InsertSubject = () => {
    const [currentSubject, setCurrentSubject] = useState(null);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const onFinish = (values) => {
        // Xử lý logic khi người dùng submit form
        console.log('Received values:', values);
    };

    const findStudentByMSV = (msv) => {
        const student = data.find((item) => item.className === msv);
        setCurrentSubject(student);
    };

    const handleDelete = () => {
        // Xử lý logic xóa sinh viên ở đây
        console.log('Deleting student:', currentSubject);
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
                name="insertSubjectForm"
                onFinish={onFinish}
                layout="vertical"
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Mã môn"
                            name="mm"
                            rules={[{ required: true, message: 'Vui lòng nhập mã môn!' }]}
                        >
                            <Input placeholder="Nhập mã môn" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Tên Môn"
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập tên môn!' }]}
                        >
                            <Input placeholder="Nhập tên môn" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Tên Lớp"
                            name="className"
                            rules={[{ required: true, message: 'Vui lòng nhập tên lớp!' }]}
                        >
                            <Input placeholder="Nhập tên lớp" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Thứ"
                            name="thu"
                            rules={[{ required: true, message: 'Vui lòng nhập thứ!' }]}
                        >
                            <Input placeholder="Nhập thứ" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Ca học"
                            name="ca"
                            rules={[{ required: true, message: 'Vui lòng nhập ca học!' }]}
                        >
                            <Input placeholder="Nhập ca học" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Phòng học"
                            name="room"
                            rules={[{ required: true, message: 'Vui lòng nhập phòng học!' }]}
                        >
                            <Input placeholder="Nhập phòng học" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Tín chỉ"
                            name="tc"
                            rules={[{ required: true, message: 'Vui lòng nhập tín chỉ!' }]}
                        >
                            <Input placeholder="Nhập số tín chỉ" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Giáo Viên"
                            name="gv"
                            rules={[{ required: true, message: 'Vui lòng nhập tên giáo viên!' }]}
                        >
                            <Input placeholder="Nhập tên giáo viên" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ background: 'red', borderColor: 'red' }}>
                        Thêm môn học
                    </Button>
                </Form.Item>
            </Form>
            <Form>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Tên lớp để xóa"
                            name="deleteMsv"
                        >
                            <Input placeholder="Nhập tên lớp" onBlur={(e) => findStudentByMSV(e.target.value)} />
                        </Form.Item>
                    </Col>

                </Row>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ background: 'red', borderColor: 'red' }} onClick={showDeleteModal}>
                        Xóa lớp học
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
                {currentSubject && (
                    <p>
                        Mã môn: {currentSubject.mm},
                        Tên môn: {currentSubject.name},
                        Tên lớp: {currentSubject.className},
                        Thứ: {currentSubject.thu},
                        Ca: {currentSubject.ca},
                        Phòng học: {currentSubject.room}
                    </p>
                )}
            </Modal>
        </div>
    );
}

export default InsertSubject;
