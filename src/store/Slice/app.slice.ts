import {createSlice} from "@reduxjs/toolkit";

export interface IAppState {
  firstAppOpen: boolean;
  filter: {
    gender?: 'male' | 'female',
    address?: string,
    age?: number,
  }
}
const initialState : IAppState = {
  firstAppOpen: false,
  filter: {

  }
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    filter: (state, action) => {
      state.filter = {
        ...state.filter,
        ...action.payload
      }
    },
    setFirstAppOpen: (state) => {
      state.firstAppOpen = true
    }
  },
  extraReducers: builder => {}
})


export const {
  filter,
  setFirstAppOpen
} = appSlice.actions;
