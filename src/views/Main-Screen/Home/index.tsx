import React from 'react';
import { LikeOutlined, MessageOutlined, LikeFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Input, List, Space } from 'antd';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
// import { Cross2Icon } from '@/components/ui/dialog';
const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `User ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const Home = () => {

  const renderHeader = () => {
    return (
      <div className='flex flex-row gap-2 p-2'>
        {/* <Avatar size={36} icon={<UserOutlined />} /> */}
        <Input
          className='rounded-xl'
          placeholder='Bạn đang nghĩ gì?'

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
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} size={36} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
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
      <Dialog>
        <DialogTrigger asChild>
          <button className="Button violet">Edit profile</button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay className="DialogOverlay" />
          <DialogContent className="DialogContent">
            <DialogTitle className="DialogTitle">Edit profile</DialogTitle>
            <DialogDescription className="DialogDescription">
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Name
              </label>
              <input className="Input" id="name" defaultValue="Pedro Duarte" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Username
              </label>
              <input className="Input" id="username" defaultValue="@peduarte" />
            </fieldset>
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
              <DialogClose asChild>
                <button className="Button green">Save changes</button>
              </DialogClose>
            </div>
            <DialogClose asChild>
              <button className="IconButton" aria-label="Close">
                {/* <Cross2Icon /> */}
              </button>
            </DialogClose>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
}


export default Home;