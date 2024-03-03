import {createAsyncThunk} from "@reduxjs/toolkit";
import {CourseService} from "../../Services/course.service";
import {toast} from "react-toastify";

export const loadCourses = createAsyncThunk("course/get-courses", async (_, thunkAPI) => {
  try {
    const data = await CourseService.loadCourse();
    return data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})


export const createCourse = createAsyncThunk("course/create-course", async (course, thunkAPI) => {
  try {
    return await CourseService.createCourse(course)
  } catch (e) {
    toast.error(e.response.data.message || e.message);
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

export const deleteCourse = createAsyncThunk('course/delete-course', async (id, thunkAPI) => {
  try {
    return await CourseService.deleteCourse(id);
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})
