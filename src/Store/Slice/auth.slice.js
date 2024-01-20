import {createSlice} from "@reduxjs/toolkit";
import {login, refreshToken} from "../Action/auth.action";


const initState = {
  isSignIn: false,
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
        state.isLoading = false
      })
      .addCase(login.rejected, (state, action ) => {
        state.isSignedIn = false
        state.isLoading = false
        // state.message = action.payload.message
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.tokens = action.payload?.tokens
        // state.isSignedIn = true
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.tokens.accessToken = ''
        state.isSignedIn = false
      })
  }

})

export const {logout, clearAccount, tempLogin} = authSlice.actions
