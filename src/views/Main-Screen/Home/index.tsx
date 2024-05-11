import React, {useMemo, useState} from 'react';
import {HomeHeader} from "@/views/Main-Screen/Home/components/HomeHeader.tsx";
import {useAppSelector} from "@/store";
import {Avatar, Card, Skeleton} from "antd";
import {
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const Home = () => {
  const {users, appLoading, filter} = useAppSelector(state => state.app);

  const usersFiltered = useMemo(() =>
    users.filter(user => (
      (filter.age === undefined || filter.age === null || filter.age === user.age) &&
      (filter.gender === undefined || filter.gender === user.gender) &&
      (filter.address === undefined || filter.address === '' || (user.address && user.address.indexOf(filter.address)) !== -1)
    )), [filter])

  console.log(filter)
  const renderItem = (item: IUser) => {
    return (
      <Card

        style={{width: 240, marginTop: 16}}
        cover={<img alt="example" className='h-[240px] object-contain'
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
        actions={[
          <LikeOutlined key="setting" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}/>,
          <MessageOutlined key="edit" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}/>
        ]}
      >
        <div className={'flex flex-col flex-1 gap-2 h-[100px]'}>
          <Card.Meta
            title={item.fullName}
            description={`${item?.age} tuổi - ${item?.address}`}
          />
          <Card.Meta
            description={`Seeking: ${item?.seeking}`}
          />
        </div>
      </Card>
    )
  }
  return (
    <div className='px-[100px] flex flex-col flex-1 min-h-0 overflow-y-auto '>
      <HomeHeader/>
      <div className='flex flex-wrap gap-2'>
        {usersFiltered.map(renderItem)}
      </div>
    </div>
  );
}


export default Home;
