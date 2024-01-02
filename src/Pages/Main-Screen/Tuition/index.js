import React, {useEffect, useMemo, useState} from 'react';
import {Space, Table, Tag} from 'antd';
import {currencyFormat} from "../../../Utils/string.helper";
import {height} from "../../../Constant/Size";

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
  },
  {
    stt: 2,
    tthd: "Học phí kỳ 3 nhóm 3 năm học 2022-2023",
    amount: 1344000,
    status: "DA_THU",
  },
  {
    stt: 3,
    tthd: "Học phí kỳ 3 nhóm 2 năm học 2022-2023",
    amount: 7308000,
    status: "DA_THU",
  },
  {
    stt: 4,
    tthd: "Học phí kỳ 2 nhóm 3 năm học 2022-2023",
    amount: 1260000,
    status: "DA_THU",
  },
  {
    stt: 5,
    tthd: "Học phí kỳ 2 nhóm 2 năm học 2022-2023",
    amount: 6535000,
    status: "DA_THU",
  },

]
const Tuition = () => {
  // const [tuitions, setTuitions] = useState(data)
  const totalamount = data.reduce((acc, curr) => acc + curr.amount, 0);
  console.log(totalamount)

  const tuitions = useMemo(() => {
    return (
      data.map(item => {
        return {amount: currencyFormat(item.amount), ...item}
      })
    )
  }, [])
  const newData = [{texttotal: "Tổng tiền các hóa đơn:", numbertotal: currencyFormat(totalamount)}];
  console.log(tuitions)

  return (
    <div style={{flex: 1}}>
      <Table
        columns={columns}
        dataSource={tuitions} scroll={{
        y: height * 0.6,
      }}
        size="small"
        pagination={false}
      />
      <Table
        columns={columnamount}
        dataSource={newData}

        size="small"
        pagination={false}
      />
    </div>
  )
}

export default Tuition
