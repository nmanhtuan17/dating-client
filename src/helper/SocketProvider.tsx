import {createContext, useEffect, useState} from "react";
import {connect} from "socket.io-client";
import {useAppSelector} from "@/store";

export const SocketContext = createContext(null);
const SocketProvider = ({children}) => {
  const [socket, setSocket] = useState(null);
  const {account, isSignedIn} = useAppSelector(state => state.auth);
  useEffect(() => {
    if(isSignedIn) {
      const socket = connect('http://localhost:8080');
      setSocket(socket);
      return () => {
        socket.close();
      };
    }
  }, [isSignedIn]);

  return <SocketContext.Provider value={{socket}}>
    {children}
  </SocketContext.Provider>
}
export default SocketProvider
