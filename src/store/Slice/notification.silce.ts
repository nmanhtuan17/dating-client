import {createSlice} from "@reduxjs/toolkit";
import {getAllConversation, getUsers, uploadAvatar} from "@/store/Action/app.action.ts";
import {getNotifications} from "@/store/Action/notification.action.ts";


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
    },
    setConversation: (state, action) => {
      state.currentConversation = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.notifications = action.payload;
      })
  }
})


export const {
  setNotifications,
  setConversation
} = notificationSlice.actions;
