import {createSlice} from "@reduxjs/toolkit";
import {login, register} from "@/store/Action/auth.action";
import {asyncLikes, updateProfile, uploadAvatar} from "@/store/Action/app.action.ts";

export interface IAuthState {
  isSignedIn: boolean,
  tokens: {
    accessToken: string,
    refreshToken: string
  },
  account: IUser,
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
    },
    clearAccount: () => {
      return initState;
    },
    setProfile: (state, action) => {
      state.account = action.payload
    },
    setAccount: (state, action) => {
      state.account.likes.push(action.payload)
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
      .addCase(register.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(register.rejected, (state, action ) => {
        state.isLoading = false
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.account = {
          ...state.account,
          avatar: action.payload.data.avatar
        }
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.account = {
          ...state.account,
          ...action.payload.data
        }
      })
      .addCase(asyncLikes.fulfilled, (state, action) => {
        state.account = {
          ...state.account,
          ...action.payload.data
        }
      })
  }

})

export const {logout, clearAccount, setProfile, setAccount} = authSlice.actions
