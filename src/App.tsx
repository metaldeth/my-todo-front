import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import css from './app.module.scss';
import { useAppDispatch } from './app/hooks';
import { Loader } from './components/loader';
import { PrivateRouteGuard } from './domains/auth/components/AuthRoute';
import { AuthModule } from './domains/auth/parts';
import { fetchUserData } from './domains/auth/state';
import { ToDo } from './domains/todo/path';

function App() {
  const dispatch = useAppDispatch();

  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    dispatch(fetchUserData())
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  if(!isLoaded) return <Loader/>;

  return (
    <div className={css.appContainer}>
      <div className={css.appContainer}>
        <Routes>
          <Route element={<PrivateRouteGuard needAuth={false}/>}>
            <Route path='/auth/*' element={<AuthModule/>}/>
          </Route>
          <Route element={<PrivateRouteGuard needAuth={true}/>}>
            <Route path='/*' element={<ToDo/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
