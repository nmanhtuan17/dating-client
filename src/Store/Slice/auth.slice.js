import {createSlice} from "@reduxjs/toolkit";


const initState = {
  isSignIn: false,
  tokens: {
    accessToken: "",
    refreshToken: ""
  },
  account: null
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
    }
  },
  extraReducers: builder => {

  }
})

export const {logout, clearAccount} = authSlice.actions
