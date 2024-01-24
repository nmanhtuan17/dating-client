import {createSlice} from "@reduxjs/toolkit";
import {createUser} from "../Action/app.action";

const initialState = {
  isLoading: false,
  message: ''
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message
      })
})
