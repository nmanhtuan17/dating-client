import {createAsyncThunk} from "@reduxjs/toolkit";

export const getStudent = createAsyncThunk("student/get-student", async (id, thunkAPI) => {
  try {

  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})
