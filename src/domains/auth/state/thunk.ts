import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../app/api";
import { MainUserDataDTO, SignInUserDTO, SignUpUserDTO } from "../../../types/serverInterface/user/userDTO";
import {mocks} from "../../../app/mocks";

export const fetchUserData = createAsyncThunk<MainUserDataDTO>('auth/fetchUserData', async () => {
  return await api.auth.fetchMainUserData();
})

export const signIn = createAsyncThunk<MainUserDataDTO, SignInUserDTO>('auth/signIn', async (payload) => {
  await mocks.auth.signIn(payload)
  return await mocks.auth.fetchMainUserData();
})

export const signUp = createAsyncThunk<void, SignUpUserDTO>('auth/signUp', async (payload) => {
  return await mocks.auth.signUp(payload)
})