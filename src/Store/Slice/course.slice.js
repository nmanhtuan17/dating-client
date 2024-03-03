import { createSlice } from "@reduxjs/toolkit";
import {createCourse, deleteCourse, loadCourses} from "../Action/course.action";

const initialState = {
  loading: false,
  courses: []
}

export const courseSlice = createSlice({
  name: 'course',
  initialState: initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(loadCourses.pending, (state, action) => {

      })
      .addCase(loadCourses.fulfilled, (state, action) => {
        state.courses = action.payload.data
      })
      .addCase(loadCourses.rejected, (state, action) => {

      })
      .addCase(createCourse.pending, (state, action) => {
        state.laoding = true;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.concat(action.payload.data.course)
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCourse.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteCourse.rejected, (state) => {
        state.loading = false;
      })
  }
})
