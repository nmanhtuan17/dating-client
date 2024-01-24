import React from 'react';
import { Space, Table, Tag } from 'antd';
import {height} from "../../../Constant/Size";

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt'
    },
    {
        title: 'Mã Sinh Viên',
        dataIndex: 'msv',
        key: 'msv'
    },
    {
        title: 'Họ Tên',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Ngày sinh',
        dataIndex: 'birth',
        key: 'birth'
    },
    {
        title: 'Lớp',
        dataIndex: 'class',
        key: 'class'
    },
    {
        title: 'Giáo Viên Chủ Nhiệm',
        dataIndex: 'gvcn',
        key: 'gvcn'
    },
    {
        title: 'Điện Thoại',
        dataIndex: 'phone',
        key: 'phone'
    },
    {
        title: 'Email SV',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Mật Khẩu',
        dataIndex: 'password',
        key: 'password'
    },
];

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
        msv: "A41957",
        name: "Nguyễn Thế Anh",
        birth: "09/12/2003",
        class: "TT34h2",
        gvcn: "Đinh Thu Khánh",
        phone: "0358550285",
        email: "theanh8703@gmail.com",
        password: "A41957"

    },
]
const StudentList = () => {
    return (
        <div style={{flex: 1, height: '100%'}}>
            <Table columns={columns}
                   dataSource={data}
                   scroll={{
                       y: height * 0.5,
                   }}
                   size="small"
                   pagination={false}
            />

        </div>
    )
}
export default StudentList