import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {loadAccount, setLogoutAndClearData} from "./auth.action";
import {RequestService} from "../../Services/request.service";
import {ApiService} from "../../Services/api.service";

export const createUser = createAsyncThunk
("app/create-user", async (user, thunkAPI) => {
  try {
    const res = await ApiService.createUser(user);
    return res
  } catch (e) {
    if (!e.response.data) {
      throw e
    }
    return thunkAPI.rejectWithValue(e.response.data)
  }
})


export const getAllStudents = createAsyncThunk
("app/getAll-students", async (_, thunkAPI) => {
  try {
    const students = await ApiService.getAllStudents();
    return students
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})
