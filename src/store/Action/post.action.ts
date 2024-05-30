import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiService} from "@/services/api.service.ts";
import {RootState} from "@/store";

export const getComments = createAsyncThunk<
  IComment[],
  string,
  { state: RootState }
>('post/get-comments', async (postId, thunkAPI) => {
  try {
    const data = await ApiService.getComments(postId);
    console.log(data)
    return data
  } catch (e) {
    console.log(e)
    return thunkAPI.rejectWithValue(e);
  }
})

export const postComment = createAsyncThunk<
  IComment,
  { postId, text },
  { state: RootState }
>('post/post-comment', async ({postId, text}, thunkAPI) => {
  try {
    const data = await ApiService.commentPost({text}, postId);
    console.log(data)
    thunkAPI.dispatch(getComments(postId));
    return data
  } catch (e) {
    console.log(e)
    return thunkAPI.rejectWithValue(e);
  }
})
