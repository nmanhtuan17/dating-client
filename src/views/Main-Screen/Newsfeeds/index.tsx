import React, {useRef, useState} from 'react';
import {LikeOutlined, MessageOutlined, LikeFilled, UserOutlined} from '@ant-design/icons';
import {Button, Input, List, Modal, Image, Skeleton} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faImage} from '@fortawesome/free-solid-svg-icons';
import {colors} from '@/constant/Colors';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {UserIcon} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/store";
import {ApiService} from "@/services/api.service.ts";
import {toast} from "react-toastify";
import {getPosts} from "@/store/Action/app.action.ts";
import {Separator} from "@/components/ui/separator.tsx";

const Newsfeeds = () => {
  const fileInputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [images, setImages] = useState<any>();
  const {account} = useAppSelector(state => state.auth);
  const [content, setContent] = useState<string>();
  const [active, setActive] = useState(false);
  const {posts} = useAppSelector(state => state.post);
  const dispatch = useAppDispatch();


  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      const data = await ApiService.uploadPost({
        content, images
      })
      console.log(data);
      dispatch(getPosts());
    } catch (e) {
      console.log(e)
      toast.error("Đăng bài thất bại");
    } finally {
      setConfirmLoading(false);
      setOpen(false);
      setContent('');
      setImages([])
    }
  };
  const handleFileUpload = async (fileList) => {
    setActive(true);
    try {
      const formData = new FormData();
      for (const file of fileList) {
        formData.append('photos', file);
      }
      const data = await ApiService.uploadImages(formData);
      setImages(data);
    } catch (e) {
      console.log(e)
    } finally {
      setActive(false);
    }
  }


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
    <div className={'bg-gray-100'}>
      <div className='container flex flex-1 items-center justify-center mb-4'>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={posts}
          header={renderHeader()}
          renderItem={(item) => (
            <List.Item
              className='w-[700px] mt-3 bg-white rounded-2xl'
              key={item._id}
              actions={[
                <div className={'flex gap-2 items-center'}>
                  <LikeOutlined
                    className={'cursor-pointer text-lg'}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}/>
                  <div>1000</div>
                </div>,
                <div className={'flex gap-2 items-center'}>
                  <MessageOutlined
                    className={'cursor-pointer text-lg'}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}/>
                  <div>1000</div>
                </div>
              ]}
            >
              <div className={'flex items-center gap-3 flex-grow mb-4'}>
                <Avatar className="items-center">
                  <AvatarImage src={item.owner.avatar} alt="@shadcn"/>
                  <AvatarFallback>
                    <UserIcon/>
                  </AvatarFallback>
                </Avatar>
                <div className={'flex flex-col gap-1'}>
                  <div className={'text-[16px] fw-bold'}>{item.owner.fullName}</div>
                  <div className={'text-xs text-gray-400'}>
                    {item.createdAt}
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-center'>
                <div className={'text-xl'}>
                  {item.content}
                </div>
                <div className='flex flex-wrap flex-grow items-center justify-center mt-4 gap-2'>
                  {item.images.map((image, index) => {
                    return (
                      <img
                        key={index}
                        width={250}
                        alt="logo"
                        src={image}
                      />
                    )
                  })}
                </div>
                <Separator className={'items-center mt-[20px]'}/>
              </div>
            </List.Item>
          )}
        />
        <Modal
          title={
            <div className='flex flex-col items-center'>
              <div className='text-[18px] font-semibold'>Tạo bài viết</div>
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
              <input
                ref={fileInputRef}
                className={'hidden'}
                onChange={(e) => {
                  handleFileUpload(e.target.files);
                }}
                type={'file'}
                multiple>
              </input>
              <div
                onClick={() => {
                  fileInputRef.current.click();
                }}
                className={''}>
                <FontAwesomeIcon icon={faImage} color={colors.green} size='lg'/>
              </div>
            </div>
            {active && <Skeleton.Image active={true}/>}
            <div className={'flex flex-wrap gap-3 justify-between'}>
              {images && images.map((image, index) => {
                return (<div key={index}>
                  <Image
                    width={136}
                    height={136}
                    src={image}
                  />
                </div>)
              })}
            </div>
            <TextArea
              value={content}
              onChange={e => setContent(e.target.value)}
              rows={4}
              placeholder="Bạn đang nghĩ gì thế ?"/>
          </div>
        </Modal>
      </div>
    </div>
  );
}


export default Newsfeeds;
