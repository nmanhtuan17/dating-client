import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiService} from "@/services/api.service.ts";

export const getNotifications = createAsyncThunk('notification', async () => {
  try {
    return await ApiService.getNotifications()
  } catch (e) {
    console.log(e)
  }
})
