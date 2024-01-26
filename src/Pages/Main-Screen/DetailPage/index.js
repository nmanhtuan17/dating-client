import React, {useState, useEffect} from 'react';
import {Space, Table, Tag} from 'antd';
import {height} from "../../../Constant/Size";
const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt'
  },
  {
    title: 'Mã môn',
    dataIndex: 'mm',
    key: 'mm',
  },
  {
    title: 'Tên môn',
    dataIndex: 'name',
    key: 'name',
  },

  {
    title: 'Số lượng',
    key: 'quantity',
    dataIndex: 'quantity'
  },
  {
    title: 'Đơn vị tính phí',
    key: 'unit',
    dataIndex: 'unit'
  },
  {
    title: 'Thành tiền',
    key: 'amount',
    dataIndex: 'amount',
    render: (text, record) => record.quantity * record.unit
  },
];

const columnamount = [
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
    mm: "CF211",
    name: "Phân tích và thiết kế thuật toán",
    quantity: 3.2,
    unit: 440000,
    amount: 0
  },
  {
    stt: 1,
    mm: "CF211",
    name: "Phân tích và thiết kế thuật toán",
    quantity: 3.2,
    unit: 440000,
    amount: 0
  },
  {
    stt: 1,
    mm: "CF211",
    name: "Phân tích và thiết kế thuật toán",
    quantity: 3.2,
    unit: 440000,
    amount: 0
  },
  {
    stt: 1,
    mm: "CF211",
    name: "Phân tích và thiết kế thuật toán",
    quantity: 3.2,
    unit: 440000,
    amount: 0
  },
]
const DetailPage = () => {

  const totalamount = data.reduce((acc, curr) => acc + curr.quantity * curr.unit, 0);
  return (
    <div style={{flex: 1}}>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          y: height*.7,
        }}
        size="small"
        pagination={false}
        footer={() => {
          return (
            <div><strong>Tổng tiền học phí: </strong>{totalamount}</div>
          )
        }}
      />
    </div>
  )
}

export default DetailPage
