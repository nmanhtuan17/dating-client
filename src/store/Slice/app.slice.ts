import {createSlice} from "@reduxjs/toolkit";
import {getUsers} from "@/store/Action/app.action.ts";



export interface IAppState {
  users?: IUser[]
  firstAppOpen: boolean;
  filter: {
    gender?: 'male' | 'female',
    address?: string,
    age?: number,
  }
  appLoading: boolean;
}

const initialState: IAppState = {
  users: [],
  firstAppOpen: true,
  filter: {},
  appLoading: false,
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
      state.firstAppOpen = false
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.appLoading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.appLoading = false
        state.users = action.payload.data
      })
      .addCase(getUsers.rejected, (state) => {
        state.appLoading = false
      })
  }
})


export const {
  filter,
  setFirstAppOpen
} = appSlice.actions;
