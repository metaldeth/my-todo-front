import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route } from "react-router";
import { RootState } from "../../../../app/store";

export interface PrivateRouteGuardPropds {
  needAuth: boolean;
}

const getRedirectPath = (authStatus: boolean) => authStatus ? '/auth/signIn' : '/';

export const PrivateRouteGuard: FC<PrivateRouteGuardPropds> = memo(({ needAuth, children }) => {
  const authStatus = useSelector<RootState>(state => state.auth.isAuth);

  console.log('needAuth, ', needAuth);
  console.log('authStatus, ', authStatus);
  if (needAuth !== authStatus) return <Navigate to={getRedirectPath(needAuth)} />;
  return <Outlet/>
})