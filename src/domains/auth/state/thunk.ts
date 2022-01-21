import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../app/api";
import { MainUserDataDTO, SignInUserDTO, SignUpUserDTO } from "../../../types/serverInterface/user/userDTO";

export const fetchUserData = createAsyncThunk<MainUserDataDTO>('auth/fetchUserData', async () => {
  return await api.auth.fetchMainUserData();
})

export const signIn = createAsyncThunk<MainUserDataDTO, SignInUserDTO>('auth/signIn', async (payload) => {
  await api.auth.signIn(payload)
  return await api.auth.fetchMainUserData();
})

export const signUp = createAsyncThunk<void, SignUpUserDTO>('auth/signUp', async (payload) => {
  return await api.auth.signUp(payload)
})