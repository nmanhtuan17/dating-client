import {createSlice} from "@reduxjs/toolkit";
import { login } from "@/store/Action/auth.action";

export interface IAuthState {
  isSignedIn: boolean,
  tokens: {
    accessToken: string,
    refreshToken: string
  },
  account: any,
  message: string,
  isLoading: boolean
}

const initState : IAuthState = {
  isSignedIn: false,
  tokens: {
    accessToken: "",
    refreshToken: ""
  },
  account: null,
  message: '',
  isLoading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    logout: state => {
      state.isSignedIn = false;
      state.tokens = {
        accessToken: "",
        refreshToken: ""
      };
      state.account = null;
      state.message = ''
    },
    clearAccount: () => {
      return initState;
    },
    setProfile: (state, action) => {
      state.account = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isSignedIn = false
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isSignedIn = true
        state.tokens = action.payload?.tokens
        state.account = action.payload?.data
        state.isLoading = false
      })
      .addCase(login.rejected, (state, action ) => {
        state.isSignedIn = false
        state.isLoading = false
        // state.message = action.payload?.message
      })
  }

})

export const {logout, clearAccount, setProfile} = authSlice.actions
