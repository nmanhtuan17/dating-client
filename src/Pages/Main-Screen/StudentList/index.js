import React from 'react';
import { Space, Table, Tag } from 'antd';

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
    },
]
const StudentList = () => {
    return (
        <div style={{flex: 1}}>
            <Table columns={columns} dataSource={data} scroll={{
                y: 240,
            }}
                   size="small"
                   pagination={false}
            />

        </div>
    )
}
export default StudentList