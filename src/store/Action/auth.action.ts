import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "@/services/auth.service";
import { clearAccount, logout } from "@/store/Slice/auth.slice";



export const login = createAsyncThunk<
  any,
  any
>("auth/login", async (account, thunkAPI) => {
  try {
    const data = await AuthService.login(account)
    console.log(data);
    return data
  } catch (e) {
    if (!e.response.data) {
      throw e
    }
    return thunkAPI.rejectWithValue(e.response.data)
  }
})
export const loadAccount = createAsyncThunk("auth/load-account", async (_, thunkAPI) => {

})
export const setLogoutAndClearData = createAsyncThunk("auth/log_out", async (_, thunkAPI) => {
  thunkAPI.dispatch(logout());
  thunkAPI.dispatch(clearAccount());
  return true;
});

