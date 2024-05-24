import * as React from "react"
import {
  Search,
} from "lucide-react"

import {Input} from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {Separator} from "@/components/ui/separator"
import {MessagesList} from "@/views/Main-Screen/Message/components/MessagesList.tsx";
import {
  Avatar as ChatAvatar,
  ChatContainer,
  Message,
  MessageInput,
  MessageList,
  ConversationHeader
} from "@chatscope/chat-ui-kit-react";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {useParams} from "react-router-dom";
import {useContext, useEffect, useMemo} from "react";
import {useAppSelector} from "@/store";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {SocketContext} from "@/helper/SocketProvider.tsx";

interface MailProps {
  defaultLayout?: number[] | undefined
}

export function Room({
                       defaultLayout = [265, 440, 655],
                     }: MailProps) {
  const {socket} = useContext(SocketContext)
  const {conversationId} = useParams();
  const {conversations} = useAppSelector(state => state.message)
  const conversation: IConversation = useMemo(() => conversations.find(item => item._id === conversationId), [conversationId]);
  const handleSendMessage = (msg) => {

    socket.emit('send', {
      room: conversationId,
      msg: msg
    })
  }

  useEffect(() => {
    if (conversationId) {
      socket.emit('join room', conversationId);
    }
  }, [conversationId]);

  useEffect(() => {
    socket.on('receive', (data) => {
      console.log(data)
    })
  }, []);
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full"
    >
      <ResizablePanel defaultSize={20} minSize={15} maxSize={20}>
        <div className="flex items-center px-4 py-2">
          <h1 className="text-xl font-bold">Inbox</h1>
        </div>
        <Separator/>
        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"/>
              <Input className="ps-[32px]"/>
            </div>
          </form>
        </div>
        <div className={'flex min-h-0 flex-1 overflow-y-auto h-full'}>
          <MessagesList/>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle/>
      <ResizablePanel defaultSize={defaultLayout[2]}>
        {conversationId ? <ChatContainer>
            <ConversationHeader>
              <ChatAvatar>
                <Avatar >
                  <AvatarImage src={conversation?.participants?.receiver?.avatar}/>
                  <AvatarFallback>
                    {conversation?.participants?.receiver.fullName
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
                userName={conversation?.participants?.receiver.fullName}
              />
            </ConversationHeader>
            <MessageList>
              <Message
                // @ts-ignore
                model={{
                  direction: 'incoming',
                  message: "Hello my friend",
                  sentTime: "just now",
                  sender: "Joe"
                }}/>
              <Message
                // @ts-ignore
                model={{
                  direction: 'outgoing',
                  message: "Hello my friend",
                  sentTime: "just now",
                  sender: "Joe"
                }}/>
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={(innerText) => {
              handleSendMessage(innerText)
            }}/>
          </ChatContainer>
          :
          <div></div>
        }

      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
