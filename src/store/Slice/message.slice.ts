import {createSlice} from "@reduxjs/toolkit";
import {getAllConversation, getUsers, uploadAvatar} from "@/store/Action/app.action.ts";



export interface IMessageState {
  conversations?: IConversation[]
}

const initialState: IMessageState = {
  conversations: []
}

export const messageSlice = createSlice({
  name: 'message',
  initialState: initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(getAllConversation.fulfilled, (state, action) => {
        state.conversations = action.payload
      })
  }
})


export const {
} = messageSlice.actions;
