import { createSlice } from "@reduxjs/toolkit";
import {loadCourses} from "../Action/course.action";

const initialState = {
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
  }
})
