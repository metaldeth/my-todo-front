import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../../app/api";
import { MainUserDataDTO } from "../../../types/serverInterface/user/userDTO";
import { fetchUserData, signIn } from "./thunk";

export interface AuthState {
  user: MainUserDataDTO | null,
  isAuth: boolean,
  isInitReqExecute: boolean,
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
  isInitReqExecute: false,
}

const getUserMainDataReducer = (state: AuthState, action: PayloadAction<MainUserDataDTO>) => {
  state.user = action.payload;
  state.isInitReqExecute = true;
  state.isAuth = true;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      api.clearTokens();
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, getUserMainDataReducer);
    builder.addCase(signIn.fulfilled, getUserMainDataReducer);
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.isInitReqExecute = true;
    });
  }
})

export const { logout } = authSlice.actions;

export const authReducer = authSlice.reducer;