import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {loadAccount, setLogoutAndClearData} from "./auth.action";
import {RequestService} from "../../Services/request.service";

export const showLoading = createAction("app/show_loading");
export const hideLoading = createAction("app/hide_loading");
