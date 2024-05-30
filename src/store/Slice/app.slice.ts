import {createSlice} from "@reduxjs/toolkit";
import {getAllConversation, getUsers, likePost, uploadAvatar} from "@/store/Action/app.action.ts";
import {getComments} from "@/store/Action/post.action.ts";



export interface IAppState {
  users?: IUser[]
  firstAppOpen: boolean;
  filter: {
    gender?: 'male' | 'female' | 'all' | null,
    address?: string,
    age?: number,
    favorite?: string
  }
  appLoading: boolean;
}

const initialState: IAppState = {
  users: [],
  firstAppOpen: true,
  filter: {
  },
  appLoading: false
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
    },
    clearFilter: (state) => {
      state.filter = {}
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
      .addCase(uploadAvatar.pending, (state, action) => {
        state.appLoading = true
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.appLoading = false
      })
      .addCase(uploadAvatar.rejected, (state, action ) => {
        state.appLoading = false
      })
      .addCase(getAllConversation.pending, (state) => {
        state.appLoading = true;
      })
      .addCase(getAllConversation.fulfilled, (state, action) => {
        state.appLoading = false;
      })
      .addCase(getAllConversation.rejected, (state, action) => {
        state.appLoading = false;
      })
      .addCase(getComments.pending, (state, action) => {
        state.appLoading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.appLoading = false;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.appLoading = false;
      })

  }
})


export const {
  filter,
  setFirstAppOpen,
  clearFilter
} = appSlice.actions;
