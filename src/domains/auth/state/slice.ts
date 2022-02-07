import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../../app/api";
import { MainUserDataDTO } from "../../../types/serverInterface/user/userDTO";
import { logOut } from "./action";
import { fetchUserData, signIn } from "./thunk";

export interface AuthState {
  user: MainUserDataDTO | null,
  isAuth: boolean,
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
}

const getUserMainDataReducer = (state: AuthState, action: PayloadAction<MainUserDataDTO>) => {
  state.user = action.payload;
  state.isAuth = true;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, getUserMainDataReducer);
    builder.addCase(signIn.fulfilled, getUserMainDataReducer);

    builder.addCase(logOut, (state) => {
      state.user = null;
      state.isAuth = false;
      api.clearTokens();
    })

  }
})

export const authReducer = authSlice.reducer;