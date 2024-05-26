import {createSlice} from "@reduxjs/toolkit";
import {getPosts} from "@/store/Action/app.action.ts";


export interface IPostState {
  posts: IPost[]
}

const initialState: IPostState = {
  posts: []
}

export const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload
      })
  }
})


export const {} = postSlice.actions;
