import {createSlice} from "@reduxjs/toolkit";


export interface IAuthState {
  profile?: {
    fullName?: string,
    age?: number,
    gender?: 'male' | 'female',
    address?: string
  },
  tokens?: {
    accessToken?: string,
    refreshToken?: string
  }
}

const initState : IAuthState = {
  profile: {},
  tokens: {
    accessToken: '',
    refreshToken: ''
  }
}


export const AuthSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {

  },
  extraReducers: builder => {}
})
