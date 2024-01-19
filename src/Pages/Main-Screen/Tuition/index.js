import React from 'react';
import { Space, Table, Tag, Modal } from 'antd';
import {Link} from "react-router-dom";

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt'
    },
    {
        title: 'Thông tin hóa đơn',
        dataIndex: 'tthd',
        key: 'tthd',
    },
    {
        title: 'Số tiền học phí',
        dataIndex: 'amount',
        key: 'amount',
    },

    {
        title: 'Tình trạng',
        key: 'status',
        dataIndex: 'status'
    },
    {
        title: 'Chi tiết',
        key: 'detail',
        dataIndex: 'detail',
        render: (text, record) => (
            <Link to={`/detailPage`}>{"Xem chi tiết khoản thu"}</Link>
        ),
    },

];

const columnamount  = [
    {
        title: '',
        dataIndex: 'texttotal',
        key: 'texttotal'
    },
    {
        title: '',
        dataIndex: 'numbertotal',
        key: 'numbertotal'
    },
]
const data = [
    {
        stt: 1,
        tthd: "Học phí kỳ 1 nhóm 2 năm học 2023-2024",
        amount: 8976000,
        status: "DA_THU",
        detail: "Xem chi tiết khoản thu"
    },
    {
        stt: 2,
        tthd: "Học phí kỳ 3 nhóm 3 năm học 2022-2023",
        amount: 1344000,
        status: "DA_THU",
        detail: "Xem chi tiết khoản thu"

    },
    {
        stt: 3,
        tthd: "Học phí kỳ 3 nhóm 2 năm học 2022-2023",
        amount: 7308000,
        status: "DA_THU",
        detail: "Xem chi tiết khoản thu"

    },
    {
        stt: 4,
        tthd: "Học phí kỳ 2 nhóm 3 năm học 2022-2023",
        amount: 1260000,
        status: "DA_THU",
        detail: "Xem chi tiết khoản thu"

    },
    {
        stt: 5,
        tthd: "Học phí kỳ 2 nhóm 2 năm học 2022-2023",
        amount: 6535000,
        status: "DA_THU",
        detail: "Xem chi tiết khoản thu"

    },

]
const Tuition = () => {


    const totalamount = data.reduce((acc, curr) => acc + curr.amount, 0);

    const newData = [{ texttotal: "Tổng tiền các hóa đơn:", numbertotal: totalamount }];


    return (
        <div style={{flex: 1}}>
            <Table columns={columns} dataSource={data} scroll={{
                y: 240,
            }}
                   size="small"
            />
            <Table columns={columnamount} dataSource={newData}

                   size="small"
            />
        </div>
    )
}

export default Tuition
