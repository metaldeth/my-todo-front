import {RootState} from '../../../app/store';

export const selectUserData = (state: RootState) => state.auth.user;
export const selectAuthState = (state: RootState) => state.auth.isAuth;
