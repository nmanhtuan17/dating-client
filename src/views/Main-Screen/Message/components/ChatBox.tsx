import {
  Avatar as ChatAvatar,
  ChatContainer,
  ConversationHeader,
  Message,
  MessageInput,
  MessageList
} from "@chatscope/chat-ui-kit-react";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import * as React from "react";
import {useAppDispatch, useAppSelector} from "@/store";
import {useContext, useEffect, useMemo, useState} from "react";
import {SocketContext} from "@/helper/SocketProvider.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {ApiService} from "@/services/api.service.ts";
import {toast} from "react-toastify";
import {getReceiver} from "@/utils/getReceiver.ts";
import {setConversation} from "@/store/Slice/notification.silce.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Delete, User} from "lucide-react";
import {getAllConversation} from "@/store/Action/app.action.ts";
import {colors} from "@/constant/Colors.ts";


export const ChatBox = () => {
  const {account} = useAppSelector(state => state.auth);
  const {socket} = useContext(SocketContext)
  const {conversationId} = useParams();
  const {conversations} = useAppSelector(state => state.message)
  const conversation: IConversation = useMemo(() => conversations.find(item => item._id === conversationId), [conversationId]);
  const receiver: IUser = useMemo(() => getReceiver(conversation.participants, account?._id), [account, conversation])
  const [messages, setMessages] = useState<IMessage[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSendMessage = async (msg) => {
    const message = await ApiService.sendMessage({receiverId: receiver?._id, message: msg});
    socket.emit('send', {
      ...message,
      room: conversationId
    })
    setMessages(prevState => [...prevState, message]);
  }

  const getMessages = async () => {
    try {
      if (conversationId) {
        const res = await ApiService.getMessages(conversationId);
        setMessages(res);
        socket.emit('join room', conversationId);
      }
    } catch (e) {
      // toast.error('Get message fail')
      console.log(e)
    }
  }

  useEffect(() => {
    getMessages();
    dispatch(setConversation(conversationId))
    return () => {
      dispatch(setConversation(''))
    }
  }, [conversationId]);


  useEffect(() => {
    if (socket) {
      socket.on('receive', (data) => {
        setMessages(prevState => [...prevState, data])
      })
    }
  }, []);

  const handleRemove = async () => {
    await ApiService.deleteConversation(conversation._id);
    navigate('/message');
    dispatch(getAllConversation());
  }
  return (
    <>
      {conversationId ? <ChatContainer style={{
          backgroundColor: colors.primary
        }}>
          <ConversationHeader className={'bg-pink-100'}>
            <ChatAvatar>
              <Avatar>
                <AvatarImage src={receiver?.avatar}/>
                <AvatarFallback>
                  {receiver?.fullName
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")
                    .toUpperCase()
                  }
                </AvatarFallback>
              </Avatar>
            </ChatAvatar>
            <ConversationHeader.Content
              info="Active 10 mins ago"
              userName={receiver?.fullName}
            />
            <ConversationHeader.Actions>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <FontAwesomeIcon icon={faEllipsis} color={'#000'}/>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={handleRemove}>
                      <Delete size={20} strokeWidth={1}/>
                      <span className={'ml-2'}>Xóa cuộc trò chuyện</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList>
            {messages.map(message => {
              return <Message
                className={'bg-pink-200'}
                // @ts-ignore
                model={{
                  direction: message.senderId === account._id ? 'outgoing' : 'incoming',
                  message: message.message,
                  sentTime: "just now",
                  sender: "Joe"
                }}/>
            })}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={(innerText) => {
            handleSendMessage(innerText)
          }}/>
        </ChatContainer>
        :
        <div></div>
      }
    </>
  )
}
