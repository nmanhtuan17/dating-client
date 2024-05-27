import {Button, Image, Input, List, Modal, Skeleton} from "antd";
import TextArea from "antd/es/input/TextArea";
import React, {useEffect, useRef, useState} from "react";
import {ListItem} from "@/views/Main-Screen/Newsfeeds/components/ListItem.tsx";
import {useAppSelector} from "@/store";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {LikeFilled, LikeOutlined, MessageOutlined} from "@ant-design/icons";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {UserIcon} from "lucide-react";
import {Separator} from "@/components/ui/separator.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import {CommentContainer} from "@/views/Main-Screen/Newsfeeds/components/CommentContainer.tsx";
import {formatTime} from "@/utils/formatTime.ts";

interface Props {
  post: IPost;
  visible: boolean;
  handleCancel: () => void;
  handleLike: (post: IPost) => void;
}

export const PostModal = ({post, visible, handleCancel, handleLike}: Props) => {
  const {account} = useAppSelector(state => state.auth);
  const commentInputRef = useRef<any>(null);
  const [text, setText] = useState('');
  const focusInput = () => {
    commentInputRef.current.focus();
  }

  const handleComment = () => {

  }

  useEffect(() => {

  }, []);
  if (!post) {
    return null;
  }
  return (
    <Modal
      width={700}
      centered
      open={visible}
      onCancel={handleCancel}
      footer={() => (
        <div className='flex flex-1 flex-grow items-center gap-3'>
          <Avatar className="items-center">
            <AvatarImage src={account.avatar} alt="@shadcn"/>
            <AvatarFallback>
              <UserIcon/>
            </AvatarFallback>
          </Avatar>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            ref={commentInputRef}
            placeholder="Viết bình luận"/>
          <div className={'cursor-pointer'}>
            <FontAwesomeIcon className={text.length > 0 ? 'text-blue-600' : 'text-gray-500'} icon={faPaperPlane}/>
          </div>
        </div>
      )}
    >
      <ScrollArea className={'h-[700px]'}>
        <div className={'flex flex-col gap-4 mt-4'}>
          <div
            className='mt-3 bg-white rounded-2xl'
          >
            <div className={'flex items-center gap-3 flex-grow mb-4'}>
              <Avatar className="items-center">
                <AvatarImage src={post.owner.avatar} alt="@shadcn"/>
                <AvatarFallback>
                  <UserIcon/>
                </AvatarFallback>
              </Avatar>
              <div className={'flex flex-col gap-1'}>
                <div className={'text-[16px] fw-bold'}>{post.owner.fullName}</div>
                <div className={'text-xs text-gray-400'}>
                  {formatTime(post.createdAt)}
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              <div className={'text-xl'}>
                {post.content}
              </div>
              <div className='flex flex-wrap flex-grow items-center justify-center mt-4 gap-2'>
                {post.images.map((image, index) => {
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
              <div className={'flex flex-grow gap-3 mt-3'}>
                <div
                  onClick={() => handleLike(post)}
                  className={'flex gap-2 items-center hover:bg-gray-200 px-2 py-1 cursor-pointer rounded transition'}>
                  {post.likes && post.likes.includes(account._id) ? <LikeFilled
                      className={'cursor-pointer text-lg text-blue-600'}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                    :
                    <LikeOutlined
                      className={'cursor-pointer text-lg'}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  }
                  <div
                    className={post.likes && post.likes.includes(account._id) && 'text-blue-600'}>{post.likes && post.likes.length} lượt
                    thích
                  </div>
                </div>
                <div
                  className={'flex gap-2 items-center hover:bg-gray-200 px-2 py-1 cursor-pointer rounded transition'}>
                  <MessageOutlined
                    onClick={focusInput}
                    className={'text-lg text-gray-500'}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}/>
                  <div>1000</div>
                </div>
              </div>
              <Separator className={'items-center mt-[16px]'}/>
              <div className={'mt-3'}>
                <CommentContainer/>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </Modal>
  )
}
