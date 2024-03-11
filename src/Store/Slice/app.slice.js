import {createSlice} from "@reduxjs/toolkit";
import {createUser, deleteStudent, getAllStudents, getAllTeacher, updateProfile} from "../Action/app.action";

const initialState = {
  isLoading: false,
  message: '',
  students: [],
  teacher: [],
  student: {},
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
        state.message = action.payload?.message
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
      .addCase(getAllTeacher.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllTeacher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teacher = action.payload?.data
      })
      .addCase(getAllTeacher.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteStudent.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
      })
})
