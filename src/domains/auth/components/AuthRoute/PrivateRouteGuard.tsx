import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { RootState } from "../../../../app/store";

export interface PrivateRouteGuardPropds {
  needAuth: boolean;
}

const getRedirectPath = (authStatus: boolean) => authStatus ? '/auth/signIn' : '/';

export const PrivateRouteGuard: FC<PrivateRouteGuardPropds> = memo(({ needAuth, children }) => {
  const authStatus = useSelector<RootState>(state => state.auth.isAuth);
  if (needAuth !== authStatus) return <Navigate to={getRedirectPath(needAuth)} />;
  return <>{children}</>
})