import {createAsyncThunk} from "@reduxjs/toolkit";
import {CourseService} from "../../Services/course.service";

export const loadCourses = createAsyncThunk("course/get-courses", async (_, thunkAPI) => {
  try {
    const data  = await CourseService.loadCourse();
    return data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})
