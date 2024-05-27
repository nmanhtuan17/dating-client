import {createSlice} from "@reduxjs/toolkit";
import {getPosts, likePost} from "@/store/Action/app.action.ts";


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
      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = state.posts.map(post => {
          return post._id === action.payload._id ? action.payload : post;
        })
      })
  }
})


export const {} = postSlice.actions;
