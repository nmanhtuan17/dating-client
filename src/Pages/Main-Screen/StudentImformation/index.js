import React, {useState} from 'react';
import {Space, Table, Tag, Input, Button, Form, Row, Col, Typography, Select, DatePicker, Upload, Divider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;


const StudentImformation = () => {
    const [currentSubject, setCurrentSubject] = useState(null);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [form] = Form.useForm(); // Sử dụng hook useForm để tạo form
    const onFinish = (values) => {
        // Xử lý logic khi người dùng submit form
        console.log('Received values:', values);
    };


    return (
        <div>
            <Title level={4}>Student Information</Title>
            {/*<Divider style={{ borderColor: 'blue', borderWidth: '2px', width: '15px' }} />*/}
            <Form
                name="insertSubjectForm"
                onFinish={onFinish}
                layout="vertical"
            >
                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item
                            label="First Name"
                            name="fn"
                            rules={[{ required: true, message: 'Please enter First Name!' }]}
                        >
                            <Input placeholder="Enter First Name" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Last Name"
                            name="ln"
                            rules={[{ required: true, message: 'Please enter Last Name!' }]}
                        >
                            <Input placeholder="Enter Last Name" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Class"
                            name="class"
                            rules={[{ required: true, message: 'Please enter Class Name!' }]}
                        >
                            <Input placeholder="Enter Class Name" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Section"
                            name="section"
                            rules={[{ required: true, message: 'Please enter Section!' }]}
                        >
                            <Input placeholder="Enter Section" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[{ required: true, message: 'Please select Gender!' }]}
                        >
                            <Select placeholder="Select Gender">
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Date Of birth"
                            name="date"
                            rules={[{ required: true, message: 'Please enter Date Of birth!' }]}
                        >
                            <DatePicker
                                format="DD/MM/YY"
                                placeholder="Select Date Of birth"
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Religion"
                            name="religion"
                            rules={[{ required: true, message: 'Please enter Religion!' }]}
                        >
                            <Input placeholder="Enter Religion" />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item
                            label="E-mail"
                            name="email"
                            rules={[{ required: true, message: 'Please enter E-mail!' }]}
                        >
                            <Input placeholder="Enter E-mail" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item
                            label="Upload Student Photo"
                            name="photo"
                            rules={[{ required: true, message: 'Please choose a file!' }]}
                            valuePropName="fileList"
                            getValueFromEvent={(e) => {
                                if (Array.isArray(e)) {
                                    return e;
                                }
                                return e && e.fileList;
                            }}
                        >
                            <Upload
                                beforeUpload={() => false}
                                maxCount={1}
                                accept=".jpg,.png,.jpeg"
                            >
                                <Button icon={<UploadOutlined />}>Choose File</Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>

                {/*<Form.Item>*/}
                {/*    <Button type="primary" htmlType="submit" style={{ background: 'red', borderColor: 'red' }}>*/}
                {/*        Thêm môn học*/}
                {/*    </Button>*/}
                {/*</Form.Item>*/}
            </Form>

            <Title level={4}>Parents Information</Title>
            {/*<Divider style={{ borderColor: 'blue', borderWidth: '2px', width: '15px' }} />*/}
            <Form
                name="insertSubjectForm"
                onFinish={onFinish}
                layout="vertical"
            >
                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item
                            label="Father Name"
                            name="fan"
                            rules={[{ required: true, message: 'Please enter Father Name!' }]}
                        >
                            <Input placeholder="Enter Father Name" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Mother Name"
                            name="mon"
                            rules={[{ required: true, message: 'Please enter Mother Name!' }]}
                        >
                            <Input placeholder="Enter Mother Name" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Father Occupation"
                            name="fo"
                            rules={[{ required: true, message: 'Please enter Father Occupation!' }]}
                        >
                            <Input placeholder="Enter Father Occupation" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Mother Occupation"
                            name="mo"
                            rules={[{ required: true, message: 'Please enter Mother Occupation!' }]}
                        >
                            <Input placeholder="Enter Mother Occupation" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item
                            label="Phone Number"
                            name="number"
                            rules={[{ required: true, message: 'Please enter Phone Number!' }]}
                        >
                            <Input placeholder="Enter Phone Number" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Nationality"
                            name="nation"
                            rules={[{ required: true, message: 'Please enter Nationality!' }]}
                        >
                            <Input placeholder="Enter Nationality" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Present Address"
                            name="pra"
                            rules={[{ required: true, message: 'Please enter Present Address!' }]}
                        >
                            <Input placeholder="Enter Present Address" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Permanent Address"
                            name="pea"
                            rules={[{ required: true, message: 'Please enter Permanent Address!' }]}
                        >
                            <Input placeholder="Enter Permanent Address" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify="start" gutter={16}>
                    
                    <Col>
                        <Button type="primary" htmlType="submit">Save</Button>
                    </Col>
                    <Col>
                        <Button htmlType="button" onClick={() => form.resetFields()}>Reset</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default StudentImformation;
