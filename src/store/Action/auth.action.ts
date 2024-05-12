import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "@/services/auth.service";
import {clearAccount, logout} from "@/store/Slice/auth.slice";
import {toast} from "react-toastify";
import {clearFilter} from "@/store/Slice/app.slice.ts";


export const login = createAsyncThunk<
  any,
  any
>("auth/login", async (account, thunkAPI) => {
  try {
    return await AuthService.login(account)
  } catch (e) {
    if (!e.response.data) {
      throw e
    }
    toast.error(e.response.data.message)
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

export const register = createAsyncThunk<
  any,
  any
>("auth/register", async (account, thunkAPI) => {
  try {
    const data = await AuthService.register(account)
    return data
  } catch (e) {
    if (!e.response.data) {
      throw e
    }
    toast.error(e.response.data.message)
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

export const verifyCode = createAsyncThunk<
  any,
  any
>("auth/verify", async (args, thunkAPI) => {
  try {
    const data = await AuthService.verify(args)
    return data
  } catch (e) {
    if (!e.response.data) {
      throw e
    }
    toast.error(e.response.data.message)
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

export const loadAccount = createAsyncThunk("auth/load-account", async (_, thunkAPI) => {

})
export const setLogoutAndClearData = createAsyncThunk("auth/log_out", async (_, thunkAPI) => {
  thunkAPI.dispatch(logout());
  thunkAPI.dispatch(clearAccount());
  thunkAPI.dispatch(clearFilter());
  return true;
});

