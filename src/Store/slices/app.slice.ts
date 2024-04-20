import {createSlice} from "@reduxjs/toolkit";

export interface IAppState {
  isLoading: boolean
}
const initialState : IAppState = {
  isLoading: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {}
})
