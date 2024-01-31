
import { createSlice } from "@reduxjs/toolkit";
import {getStudent} from "../Action/student.action";

const initialState = {
  students: []
}

export const studentSlice = createSlice({
  name: 'student',
  initialState: initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(getStudent.pending, (state) => {

      })
      .addCase(getStudent.fulfilled, (state, action ) => {

      })
      .addCase(getStudent.rejected, (state, action) => {

      })

  }
})
