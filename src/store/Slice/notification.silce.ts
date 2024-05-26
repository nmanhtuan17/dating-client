import {createSlice} from "@reduxjs/toolkit";
import {getAllConversation, getUsers, uploadAvatar} from "@/store/Action/app.action.ts";


export interface IAppState {
  notifications: INotification[];
  currentConversation?: string;
}

const initialState: IAppState = {
  notifications: [],
  currentConversation: ''
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = [...state.notifications, action.payload];
      console.log(state.notifications);
    },
    setConversation: (state, action) => {
      state.currentConversation = action.payload;
    }
  },
  extraReducers: builder => {
  }
})


export const {
  setNotifications,
  setConversation
} = notificationSlice.actions;
