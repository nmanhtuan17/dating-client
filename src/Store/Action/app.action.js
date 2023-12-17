import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {loadAccount, setLogoutAndClearData} from "./auth.action";
import {RequestService} from "../../Services/request.service";
export const bootApp = createAsyncThunk(
  "app/boot",
    async (_, thunkAPI) => {
      try {
        await RequestService.initialize();
        // await thunkAPI.dispatch(loadAccount());
        return {
          isSignIn: true,
        };

      } catch (_) {
        thunkAPI.dispatch(setLogoutAndClearData());
        return {
          isSignIn: false,
        };
      }
    })
;

export const showLoading = createAction("app/show_loading");
export const hideLoading = createAction("app/hide_loading");
