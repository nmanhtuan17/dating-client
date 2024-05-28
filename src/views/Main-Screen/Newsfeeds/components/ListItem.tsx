import {LikeFilled, LikeOutlined, MessageOutlined} from "@ant-design/icons";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {UserIcon} from "lucide-react";
import {Separator} from "@/components/ui/separator.tsx";
import {List} from "antd";
import React from "react";
import {formatTime} from "@/utils/formatTime.ts";

interface Props {
  post: IPost;
  account: IUser;
  handleLike?: (post: IPost) => void;
  handleComment?: (post: IPost) => void;
}

export const ListItem = ({post, account, handleLike, handleComment}: Props) => {

  return (
    <List.Item
      className='mt-3 bg-white rounded-2xl'
      key={post._id}
      actions={[
        <div
          onClick={() => handleLike(post)}
          className={'flex gap-2 items-center hover:bg-gray-200 px-2 py-1 cursor-pointer rounded transition'}>
          {post.likes && post.likes.includes(account?._id) ? <LikeFilled
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
          <div className={post.likes && post.likes.includes(account?._id) && 'text-blue-600'}>{post.likes && post.likes.length} lượt thích</div>
        </div>,
        <div
          onClick={() => handleComment(post)}
          className={'flex gap-2 items-center hover:bg-gray-200 px-2 py-1 cursor-pointer rounded transition'}>
          <MessageOutlined
            className={'cursor-pointer text-lg'}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}/>
          <div>{post.comments && post.comments.length} bình luận</div>
        </div>
      ]}
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
      </div>
    </List.Item>
  )
}
