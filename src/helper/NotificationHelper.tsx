import {useContext, useEffect, useLayoutEffect} from "react";
import {setNotifications} from "@/store/Slice/notification.silce.ts";
import {SocketContext} from "@/helper/SocketProvider.tsx";
import {useAppDispatch, useAppSelector} from "@/store";
import {getNotifications} from "@/store/Action/notification.action.ts";


export const NotificationHelper = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(getNotifications());
  }, [])
  return <></>
}
