import {createAsyncThunk} from "@reduxjs/toolkit";
import {clearAccount, logout} from "../Slice/auth.slice";
import {AuthService} from "../../Services/auth.service";
import {store} from "../store";


export const login = createAsyncThunk("auth/login", async (account, thunkAPI) => {
  try {
    const data = await AuthService.login(account)
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

export const refreshToken = createAsyncThunk(
  "auth/refresh-token",
    async (_, thunkAPI) => {
      try {
        const {refreshToken} = store.getState().auth.tokens;
        console.log("refresh token ________________________________________-");
        const data = await AuthService.refreshToken(refreshToken);
        console.log(data)
        return data
      } catch (err) {
        console.log("Error refresh token ");
        thunkAPI.dispatch(setLogoutAndClearData());
        return null;
      }
    }
);
