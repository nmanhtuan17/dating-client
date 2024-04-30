import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@Store/store";
import {AuthService} from "@services/auth.services";
export const signIn = createAsyncThunk<
  any,
  { email: string, password: string },
  {state: RootState}
>('sign-in', async (arg, thunkAPI) => {
  try {
    // const data = await AuthService.signIn(arg);
    // console.log(data)
    return 1
  } catch (e) {
    console.log(e)
    thunkAPI.rejectWithValue(e)
  }
})
