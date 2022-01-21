import classNames from 'classnames';
import { Route, Routes } from 'react-router';
import './app.scss'
import { PrivateRouteGuard } from './domains/auth/components/AuthRoute';
import { AuthModule } from './domains/auth/parts';
import { SignIn } from './domains/auth/parts/signIn';
import { SignUp } from './domains/auth/parts/signUp';
import { TestDrive } from './domains/testDrive';

function App() {
  return (
    <div className={classNames('appContainer')}>
      <Routes>
        <Route element={<PrivateRouteGuard needAuth={false}/>}>
          <Route path='/auth/*' element={<AuthModule/>}/>
        </Route>
        <Route element={<PrivateRouteGuard needAuth={true}/>}>
          <Route path='/test' element={<TestDrive/>}/>
        </Route>
        <Route path='/*' element={<>404</>}/>
      </Routes>
    </div>
  );
}

export default App;
