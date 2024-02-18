import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {loadAccount, setLogoutAndClearData} from "./auth.action";
import {RequestService} from "../../Services/request.service";
import {ApiService} from "../../Services/api.service";
import {store} from "../store";
import {setProfile} from "../Slice/auth.slice";

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


export const getAllTeacher = createAsyncThunk
("app/getAll-teacher", async (_, thunkAPI) => {
  try {
    return await ApiService.getAllTeacher();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

export const deleteStudent = createAsyncThunk
("app/delete-student", async (id, thunkAPI) => {
  try {
    return await ApiService.deleteStudent(id);
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

export const updateProfile = createAsyncThunk
("app/update-profile", async ({data, id}, thunkAPI) => {
  try {
    const res = await ApiService.updateProfile(data, id);
    if (!store.getState().auth.account.isAdmin){
      store.dispatch(setProfile(res.data))
    }
    return res
  } catch (e) {
    console.log(e)
    return thunkAPI.rejectWithValue(e.response.data)
  }
})
