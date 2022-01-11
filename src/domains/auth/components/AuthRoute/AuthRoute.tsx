import {FC} from 'react';
import {Route, RouteProps} from 'react-router';
import {PrivateRouteGuard} from './PrivateRouteGuard'

interface PrivateRouteProps extends RouteProps {
  needAuth: boolean;
}

export const AuthRoute: FC<PrivateRouteProps> = ({ needAuth = true, children, ...rest }) => {
  return (
    <Route {...rest} >
      <PrivateRouteGuard needAuth={needAuth}>
        {children}
      </PrivateRouteGuard>
    </Route>
  )
}