import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getPosts, likePost} from "@/store/Action/app.action.ts";
import {getComments} from "@/store/Action/post.action.ts";


export interface IPostState {
  posts: IPost[];
  selectedPost?: IPost;
  comments?: IComment[];
}

const initialState: IPostState = {
  posts: [],
  selectedPost: undefined
}

export const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    selectPost: (state, action: PayloadAction<IPost>) => {
      state.selectedPost = action.payload;
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
  },
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
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
  }
})


export const {
  selectPost,
  setComments
} = postSlice.actions;
