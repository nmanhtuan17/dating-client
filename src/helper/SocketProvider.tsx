import {createContext, useEffect, useState} from "react";
import {connect} from "socket.io-client";
import {useAppDispatch, useAppSelector} from "@/store";
import {useLocation, useParams} from "react-router-dom";
import {setNotifications} from "@/store/Slice/notification.silce.ts";

export const SocketContext = createContext(null);
const SocketProvider = ({children}) => {
  const [socket, setSocket] = useState(null);
  const {account, isSignedIn} = useAppSelector(state => state.auth);
  const {currentConversation} = useAppSelector(state => state.notification)
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isSignedIn) {
      const socket = connect('http://localhost:8080');
      socket.emit('setup', account?._id);
      setSocket(socket);
      return () => {
        socket.close();
      };
    }
  }, [isSignedIn]);

  useEffect(() => {
    if (socket) {
      socket.on('receive', (data) => {
        if (currentConversation === data.room) {
          return;
        } else {
          dispatch(setNotifications({
            type: 'newMessage',
            text: data.message,
            senderId: data.senderId,
            room: data.room
          }));
        }
        console.log(data)
      })
    }
  });

  return <SocketContext.Provider value={{socket}}>
    {children}
  </SocketContext.Provider>
}
export default SocketProvider
