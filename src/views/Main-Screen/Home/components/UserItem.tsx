import {Card, Image} from "antd";
import {LikeFilled, LikeOutlined, MessageOutlined} from "@ant-design/icons";
import React from "react";
import {ApiService} from "@/services/api.service.ts";

interface Props {
  user: IUser,
  handleLike: (val: any) => void;
  liked: boolean;
  handleSendMessage: (id: string) => void;
}

export const UserItem = ({user, handleLike, liked, handleSendMessage}: Props) => {
  return (
    <Card
      style={{width: 240, marginTop: 16}}
      cover={<Image preview={false}
                    height={240}
                    className='h-[240px] object-contain'
                    src={user?.avatar}
                    fallback="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}

      actions={[
        !liked ?
          <LikeOutlined
            key="like"
            onClick={() => handleLike && handleLike(user)}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}/>
          :
          <LikeFilled
            key="like"
            onClick={() => handleLike && handleLike(user)}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}/>,
        <MessageOutlined
          key="message"
          onClick={() => handleSendMessage(user._id)}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      ]}
    >
      <div className={'flex flex-col flex-1 gap-2 h-[100px]'}>
        <Card.Meta
          title={user.fullName}
          description={`${user?.age} tuổi - ${user?.address}`}
        />
        <Card.Meta
          description={`Seeking: ${user?.seeking}`}
        />
      </div>
    </Card>
  )
}
