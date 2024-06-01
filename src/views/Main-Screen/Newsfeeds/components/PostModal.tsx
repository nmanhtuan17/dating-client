import {Button, Image, Input, List, Modal, Skeleton} from "antd";
import TextArea from "antd/es/input/TextArea";
import React, {useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import {ListItem} from "@/views/Main-Screen/Newsfeeds/components/ListItem.tsx";
import {useAppDispatch, useAppSelector} from "@/store";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {LikeFilled, LikeOutlined, MessageOutlined} from "@ant-design/icons";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {UserIcon} from "lucide-react";
import {Separator} from "@/components/ui/separator.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import {CommentContainer} from "@/views/Main-Screen/Newsfeeds/components/CommentContainer.tsx";
import {formatTime} from "@/utils/formatTime.ts";
import {postComment} from "@/store/Action/post.action.ts";
import {SocketContext} from "@/helper/SocketProvider.tsx";

interface Props {
  visible: boolean;
  handleCancel: () => void;
  handleLike: (post: IPost) => void;
}

export const PostModal = ({visible, handleCancel, handleLike}: Props) => {
  const {socket } = useContext(SocketContext);
  const dispatch = useAppDispatch();
  const {selectedPost, comments} = useAppSelector(state => state.post);
  const {account} = useAppSelector(state => state.auth);
  const commentInputRef = useRef<any>(null);
  const [text, setText] = useState<string>('');

  const focusInput = () => {
    commentInputRef.current.focus();
  }

  const handleComment = () => {
    if (text.length > 0 && selectedPost) {
      dispatch(postComment({postId: selectedPost._id, text: text }))
      socket.emit('getNotification', {
        text: `${account?.fullName} đã bình luận bài viết của bạn`,
        receiverId: selectedPost.owner._id,
        type: 'other'
      })
      setText('');
    }
  }

  if (!selectedPost) {
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
            <AvatarImage src={account?.avatar} alt="@shadcn"/>
            <AvatarFallback>
              <UserIcon/>
            </AvatarFallback>
          </Avatar>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            ref={commentInputRef}
            placeholder="Viết bình luận"/>
          <div
            onClick={handleComment}
            className={'cursor-pointer'}>
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
                <AvatarImage src={selectedPost.owner.avatar} alt="@shadcn"/>
                <AvatarFallback>
                  <UserIcon/>
                </AvatarFallback>
              </Avatar>
              <div className={'flex flex-col gap-1'}>
                <div className={'text-[16px] fw-bold'}>{selectedPost.owner.fullName}</div>
                <div className={'text-xs text-gray-400'}>
                  {formatTime(selectedPost.createdAt)}
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              <div className={'text-xl'}>
                {selectedPost.content}
              </div>
              <div className='flex flex-wrap flex-grow items-center justify-center mt-4 gap-2'>
                {selectedPost.images.map((image, index) => {
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
                  onClick={() => handleLike(selectedPost)}
                  className={'flex gap-2 items-center hover:bg-gray-200 px-2 py-1 cursor-pointer rounded transition'}>
                  {selectedPost.likes && selectedPost.likes.includes(account?._id) ? <LikeFilled
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
                    className={selectedPost.likes && selectedPost.likes.includes(account._id) && 'text-blue-600'}>{selectedPost.likes && selectedPost.likes.length} lượt
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
                  <div>{comments && comments.length} bình luận</div>
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
