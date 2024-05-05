import {createSlice} from "@reduxjs/toolkit";

export interface IAppState {

}
const initialState : IAppState = {
  
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {}
})
