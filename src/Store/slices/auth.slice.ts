import {createSlice} from "@reduxjs/toolkit";
import {signIn} from "@Store/actions/auth.action";


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
    setTokens: (state, action) => {
      state.tokens = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.profile = action.payload.data.data
        state.tokens = action.payload.data.tokens
      })
      .addCase(signIn.rejected, (state, action) => {

      })
  }
})

export const {setTokens} = AuthSlice.actions
