import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "@/services/auth.service.ts";
import {toast} from "react-toastify";
import {ApiService} from "@/services/api.service.ts";
import {RootState} from "@/store";

export const updateProfile = createAsyncThunk<
  any,
  any
>("user/update", async (args, thunkAPI) => {
  try {
    return await ApiService.updateProfile(args)
  } catch (e) {
    if (!e.response.data) {
      throw e
    }
    toast.error(e.response.data.message)
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

export const uploadAvatar = createAsyncThunk<
  any,
  any
>("user/upload-avatar", async (formData, thunkAPI) => {
  try {
    return await ApiService.uploadAvatar(formData);
  } catch (e) {
    if (!e.response.data) {
      throw e
    }
    toast.error(e.response.data.message)
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

export const getUsers = createAsyncThunk<
  any
>("user/get-all", async (_, thunkAPI) => {
  try {
    return await ApiService.getUsers()
  } catch (e) {
    if (!e.response.data) {
      throw e
    }
    toast.error(e.response.data.message)
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

export const asyncLikes = createAsyncThunk<
  any,
  any,
  { state: RootState }
>("user/async-likes", async (likes, thunkAPI) => {
  try {
    return await ApiService.updateProfile({likes: likes})
  } catch (e) {
    if (!e.response.data) {
      throw e
    }
    toast.error(e.response.data.message)
    return thunkAPI.rejectWithValue(e.response.data)
  }
})
