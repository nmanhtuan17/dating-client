import React, {useEffect, useMemo, useState} from 'react';
import {Space, Table, Tag} from 'antd';
import {currencyFormat} from "../../../Utils/string.helper";
import {height} from "../../../Constant/Size";
import {useAppSelector} from "../../../Store/store";

import {Link} from "react-router-dom";

const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    width: 50
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
  const {account} = useAppSelector(state => state.auth);
  console.log(account)
  const totalamount = data.reduce((acc, curr) => acc + curr.amount, 0);

  const tuitions = useMemo(() => {
    return (
      data.map(item => {
        return {amount: currencyFormat(item.amount), ...item}
      })
    )
  }, [])
  console.log(tuitions)

  const renderFooter = () => <div className='d-flex mt-4 p3'>
    <div className='flex-fill '><strong>Tổng tiền các hóa đơn: </strong>{currencyFormat(totalamount)}</div>
  </div>
  return (
    <div className='bg-white flex-fill' style={{flex: 1, height: '100%'}}>
      <Table
        rowKey={item => item.stt}
        columns={columns}
        dataSource={tuitions} scroll={{
          y: height*.7,
      }}
        size="small"
        pagination={false}
        footer={renderFooter}
      />
    </div>
  )
}

export default Tuition
