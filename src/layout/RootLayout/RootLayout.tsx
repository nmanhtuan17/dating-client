import React from "react";
import {Outlet, Link, useNavigate} from "react-router-dom";
import {Badge, Dropdown, Layout, Space, Spin} from "antd";
import {colors} from "@/constant/Colors";
import {Content, Header} from "antd/es/layout/layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket,} from "@fortawesome/free-solid-svg-icons";
import {faUser, faBell} from "@fortawesome/free-regular-svg-icons";
import {store, useAppDispatch, useAppSelector} from "@/store";
import NavBar from "@/navigation/NavBar";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {User, UserIcon} from "lucide-react";
import {setLogoutAndClearData} from "@/store/Action/auth.action.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ScrollArea
} from "@/components/ui/scroll-area.tsx";
import {getUser} from "@/utils/getReceiver.ts";

const RootLayout = () => {
  const dispatch = useAppDispatch();
  const {account} = useAppSelector(state => state.auth);
  const {notifications} = useAppSelector(state => state.notification);
  const navigate = useNavigate();
  const items = [
    {
      label: <Link to="/settings/profile">
        <FontAwesomeIcon icon={faUser}/>
        <span style={{margin: '4px 6px'}}>Thông tin cá nhân
        </span>
      </Link>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: <a>
        <FontAwesomeIcon icon={faArrowRightFromBracket}/>
        <span style={{margin: '4px 6px'}}>Logout</span>
      </a>,
      key: 'logout',
    },
  ];
  const handleLogout = (e) => {
    if (e.key === 'logout')
      dispatch(setLogoutAndClearData())
  }


  return (
    <div className='flex flex-col h-screen'>
      <Header style={{
        display: 'flex',
        alignItems: 'center',
        background: colors.background,
        padding: '0 26px',
        justifyContent: 'space-between',
        boxShadow: '0px 1px 4px -1px rgba(0, 0, 0, .15)'
      }}>
        <div></div>
        <NavBar/>
        <div className={
          'flex items-center gap-3'
        }>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Badge count={notifications && notifications.length} className={'cursor-pointer'}>
                <div className={'p-2'}>
                  <FontAwesomeIcon icon={faBell}/>
                </div>
              </Badge>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <ScrollArea className={'h-[300px] w-[300px]'}>
                {notifications &&
                  notifications.map(item => {
                    return (
                      <>
                        <DropdownMenuItem onClick={() => {
                          item.type === 'newMessage' &&
                          navigate(`/message/${item.room}`)
                        }}>
                          {item.type === 'newMessage' ?
                            <div className={'flex flex-col'}>
                              <div className='text-xs text-gray-400'>New message</div>
                              <div>
                                <div>
                                  {getUser(item.senderId)?.fullName}
                                </div>
                                <div>{item.text}</div>
                              </div>
                            </div>
                            :
                            <div>{item.text}</div>
                          }
                        </DropdownMenuItem>
                        <DropdownMenuSeparator/>
                      </>
                    )
                  })
                }
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu>
          <Dropdown
            menu={{items, onClick: handleLogout} as any}
            placement="bottomRight"
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className={'flex items-center'}>
                <Avatar className="items-center">
                  <AvatarImage src={account?.avatar} alt="@shadcn"/>
                  <AvatarFallback>
                    <UserIcon/>
                  </AvatarFallback>
                </Avatar>
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
      <div className='flex flex-1 flex-col flex-grow min-h-0 overflow-y-auto'>
        <Outlet/>
      </div>
    </div>
  )
}

export default RootLayout

