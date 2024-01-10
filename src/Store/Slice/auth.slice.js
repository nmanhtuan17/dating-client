import {createSlice} from "@reduxjs/toolkit";
import {login} from "../Action/auth.action";


const initState = {
  isSignIn: false,
  tokens: {
    accessToken: "",
    refreshToken: ""
  },
  account: null,
  message: null,
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
    },
    clearAccount: () => {
      return initState;
    },
    tempLogin: (state, action) => {
      state.isSignedIn = true
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
        state.account = action.payload?.data.user
        state.message = action.payload?.message
        state.isLoading = false
      })
      .addCase(login.rejected, (state, action ) => {
        state.isSignedIn = false
        state.isLoading = false
        state.message = action.payload.message
      })
  }

})

export const {logout, clearAccount, tempLogin} = authSlice.actions
