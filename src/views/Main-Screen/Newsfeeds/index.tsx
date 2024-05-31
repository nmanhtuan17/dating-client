import React, {useContext, useRef, useState} from 'react';
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
import {getPosts, likePost} from "@/store/Action/app.action.ts";
import {ListItem} from "@/views/Main-Screen/Newsfeeds/components/ListItem.tsx";
import {PostModal} from "@/views/Main-Screen/Newsfeeds/components/PostModal.tsx";
import {selectPost} from "@/store/Slice/post.slice.ts";
import {getComments} from "@/store/Action/post.action.ts";
import {SocketContext} from "@/helper/SocketProvider.tsx";

const Newsfeeds = () => {
  const {socket } = useContext(SocketContext);
  const fileInputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [images, setImages] = useState<any>();
  const {account} = useAppSelector(state => state.auth);
  const [content, setContent] = useState<string>();
  const [active, setActive] = useState(false);
  const {posts} = useAppSelector(state => state.post);
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
    dispatch(getPosts());
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      const data = await ApiService.uploadPost({
        content, images
      })
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

  const handleLike = (post: IPost) => {
    dispatch(likePost(post._id));
    socket.emit('getNotification', {
      text: `${post.owner.fullName} đã thích bài viết của bạn`,
      receiverId: post.owner._id,
      type: 'other'
    })
  }


  const handleComment =  (post: IPost) => {
    dispatch(selectPost(post));
    dispatch(getComments(post._id))
    setVisible(true);
  }


  return (
    <div className={'bg-gray-100'}>
      <div className='container flex flex-1 items-center justify-center mb-4'>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={posts as IPost[]}
          header={renderHeader()}
          renderItem={(item) => (
            <ListItem
              post={item}
              account={account}
              handleLike={handleLike}
              handleComment={handleComment}
            />
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
          onCancel={() => setOpen(false)}
          confirmLoading={confirmLoading}
          footer={() => (
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
        <PostModal visible={visible} handleCancel={handleCancel} handleLike={handleLike}/>
      </div>
    </div>
  );
}


export default Newsfeeds;
