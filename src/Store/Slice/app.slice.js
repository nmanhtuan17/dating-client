import {createSlice} from "@reduxjs/toolkit";
import {createUser} from "../Action/app.action";

const initialState = {}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(createUser.pending, (state) => {

      })
      .addCase(createUser.fulfilled, (state, action) => {

      })
      .addCase(createUser.rejected, (state) => {

      })
})
