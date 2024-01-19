import React, {useState} from 'react';
import {Space, Table, Tag} from 'antd';
import {height} from "../../../Constant/Size";

const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    width: 50
  },
  {
    title: 'Mã môn',
    dataIndex: 'mm',
    key: 'mm',
    width: 100
  },
  {
    title: 'Tên môn',
    dataIndex: 'name',
    key: 'name',
  },

  {
    title: 'Tín chỉ',
    key: 'tc',
    dataIndex: 'tc'
  },
  {
    title: 'Điểm',
    key: 'score',
    dataIndex: 'score'
  },
];

const columnscore = [

  {
    title: '',
    dataIndex: 'textsumtc',
    key: 'textsumtc'
  },
  {
    title: '',
    dataIndex: 'numaveragetc',
    key: 'numaveragetc'
  },
  // {
  //   title: 'Tổng số tín chỉ tích lũy',
  //   dataIndex: 'sumtc',
  //   key: 'sumtc'
  // },
  // {
  //   title: 'Trung bình chung tích lũy:',
  //   dataIndex: 'averagetc',
  //   key: 'averagetc'
  // },
]
const data = [
  {
    stt: 1,
    mm: "CF212",
    name: "Cấu trúc dữ liệu",
    tc: 3,
    score: 8
  },
  {
    stt: 2,
    mm: "CS100",
    name: "Tin đại cương",
    tc: 2,
    score: 7.5
  },
  {
    stt: 3,
    mm: "CS102",
    name: "Công dân số",
    tc: 2,
    score: 7.4
  },
  {
    stt: 4,
    mm: "CS110",
    name: "Kỹ thuật số",
    tc: 2,
    score: 9.3
  },
  {
    stt: 5,
    mm: "CS121",
    name: "Ngôn ngữ lập trình",
    tc: 3,
    score: 7
  },
  {
    stt: 6,
    mm: "CS122",
    name: "Lập trình hướng đối tượng",
    tc: 3,
    score: 7.8
  },
  {
    stt: 7,
    mm: "CS212",
    name: "Kiến trúc máy tính",
    tc: 3,
    score: 7
  },
  {
    stt: 8,
    mm: "EC102",
    name: "Nhập môn kinh tế học",
    tc: 2,
    score: 9
  },
  {
    stt: 9,
    mm: "GE101",
    name: "Tiếng Anh sơ cấp 1",
    tc: 2,
    score: 7.3
  },
  {
    stt: 10,
    mm: "GE102",
    name: "Tiếng Anh sơ cấp 2",
    tc: 2,
    score: 7.1
  },
  {
    stt: 11,
    mm: "GE103",
    name: "Tiếng Anh sơ cấp 3",
    tc: 2,
    score: 6.4
  },
  {
    stt: 12,
    mm: "GE101",
    name: "Tiếng Anh sơ trung cấp 1",
    tc: 2,
    score: 5
  },
  {
    stt: 13,
    mm: "GJ101",
    name: "Tiếng Nhật 1",
    tc: 2,
    score: 8.9
  },
  {
    stt: 13,
    mm: "GJ102",
    name: "Tiếng Nhật 2",
    tc: 2,
    score: 7.8
  },
  {
    stt: 15,
    mm: "IS222",
    name: "Cơ sở dữ liệu",
    tc: 3,
    score: 7.7
  },
  {
    stt: 16,
    mm: "IS314",
    name: "Hệ thống thông tin",
    tc: 3,
    score: 8.4
  },
]
const Score = () => {
  const totalCredits = data.reduce((acc, curr) => acc + curr.tc, 0);
  const totalScore = data.reduce((acc, curr) => acc + (curr.score * curr.tc), 0);


  const averageScore = (totalScore / totalCredits).toFixed(2);
  const newData = [
    {
      textsumtc: 'Tổng số tín chỉ tích lũy',
      numaveragetc: totalCredits
    },
    {
      textsumtc: 'Trung bình chung tích lũy:',
      numaveragetc: averageScore
    }
  ];
  return (
    <div style={{flex: 1}}>
      <Table
        columns={columns}
        dataSource={data} scroll={{
        y: height * 0.6,
      }}
        size="small"
        pagination={false}
      />
      <Table
        columns={columnscore}
        dataSource={newData}
        size="small"
        pagination={false}
      />
    </div>
  )
}

export default Score
