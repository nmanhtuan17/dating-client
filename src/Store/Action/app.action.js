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
export const showLoading = createAction("app/show_loading");
export const hideLoading = createAction("app/hide_loading");
