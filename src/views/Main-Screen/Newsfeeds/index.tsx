import React, {useEffect, useState} from 'react';
import {LikeOutlined, MessageOutlined, LikeFilled, UserOutlined} from '@ant-design/icons';
import {Button, Input, List, Modal, Space, Upload, Avatar as AntdAvatar} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faImage} from '@fortawesome/free-solid-svg-icons';
import {colors} from '@/constant/Colors';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {UserIcon} from "lucide-react";
import {useAppSelector} from "@/store";

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  title: `User ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  timestamp: `${new Date(Date.now()).getHours()}: ${new Date(Date.now()).getMinutes()} phút`,
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({icon, text}) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const Home = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [files, setFiles] = useState<any>([]);
  const [images, setImages] = useState<any>();
  const {account} = useAppSelector(state => state.auth);

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };


  const renderHeader = () => {
    return (
      <div className='flex flex-row gap-2 p-2'>
        <Avatar className="items-center">
          <AvatarImage src={account?.avatar} alt="@shadcn"/>
          <AvatarFallback>
            <UserIcon/>
          </AvatarFallback>
        </Avatar>
        <Input
          className='rounded-2xl'
          placeholder='Bạn đang nghĩ gì?'
          onClick={() => {
            setOpen(true)
          }}
        />
      </div>
    )
  }
  return (
    <div className='container flex flex-1 justify-center'>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        header={renderHeader()}
        renderItem={(item) => (
          <List.Item
            className='w-[700px] mt-3 bg-white rounded-2xl'
            key={item.title}
            actions={[
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
            ]}
          >
            <List.Item.Meta
              avatar={<AntdAvatar src={item.avatar} size={48}/>}
              title={<div>{item.title}</div>}
              description={item.timestamp}
            />
            <div className='flex flex-wrap items-center justify-center'>
              {item.content}
              <div className='flex flex-grow items-center justify-center mt-4'>
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              </div>
            </div>
          </List.Item>
        )}
      />
      <Modal
        title={
          <div className='flex flex-col items-center'>
            <div className='text-[18px] font-semibold'>Tạo bài viết</div>
            {/* <Divider /> */}
          </div>
        }
        centered
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        footer={(_, {OkBtn, CancelBtn}) => (
          <div className='flex flex-1'>
            <Button onClick={handleOk} className='flex flex-1 justify-center'>ok</Button>
          </div>
        )}
      >
        <div className='flex flex-col gap-4 mt-4'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-row items-center gap-2'>
              <Avatar className="items-center">
                <AvatarImage src={account?.avatar} alt="@shadcn"/>
                <AvatarFallback>
                  <UserIcon/>
                </AvatarFallback>
              </Avatar>
              <div className='text-[18px] font-semibold'>{account?.fullName}</div>
            </div>
            <Upload
              onChange={({file, fileList}) => {
                setFiles(fileList)
              }}
              showUploadList={false}
              multiple>
              <FontAwesomeIcon icon={faImage} color={colors.green} size='lg'/>
            </Upload>
          </div>
          <TextArea rows={4} placeholder="Bạn đang nghĩ gì thế ?" maxLength={6}/>
        </div>
      </Modal>
    </div>
  );
}


export default Home;
