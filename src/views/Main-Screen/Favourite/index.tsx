import {useAppSelector} from "@/store";
import {Empty, List, Skeleton} from "antd";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {UserIcon} from "lucide-react";
import React from "react";
import {MessageOutlined} from "@ant-design/icons";

const Favourite = () => {
  const {account} = useAppSelector(state => state.auth);
  if (!account?.likes.length) {
    return <div className={'flex flex-1 flex-col min-h-0 justify-center'}>
      <Empty/>
    </div>
  }
  return (
    <div className="p-4 flex flex-1 flex-col">
      <List
        className="demo-loadmore-list px-[100px]"
        itemLayout="horizontal"
        dataSource={account.likes as IUser[]}
        renderItem={(item) => (
          <List.Item
            className={'bg-white px-3 rounded'}
          >
            <List.Item.Meta
              avatar={
                <Avatar className="items-center">
                  <AvatarImage src={item?.avatar} alt="@shadcn"/>
                  <AvatarFallback>
                    <UserIcon/>
                  </AvatarFallback>
                </Avatar>}
              title={<a href="https://ant.design">{item.fullName}</a>}
              description={item.address}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Favourite
