import {createSlice} from "@reduxjs/toolkit";
import {createUser, getAllStudents} from "../Action/app.action";

const initialState = {
  isLoading: false,
  message: '',
  students: []
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
      .addCase(getAllStudents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllStudents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.students = action.payload?.data
      })
      .addCase(getAllStudents.rejected, (state, action) => {
        state.isLoading = false;
      })
})
