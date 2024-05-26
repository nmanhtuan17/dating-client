import {useContext, useEffect, useState} from "react";
import {SocketContext} from "@/helper/SocketProvider.tsx";
import {useAppSelector} from "@/store";


export const MessageHelper = () => {
  const {socket} = useContext(SocketContext);
  const {account, isSignedIn} = useAppSelector(state => state.auth);
  const [messages, setMessages] = useState<IMessage[]>([]);

  return (<></>)
}
