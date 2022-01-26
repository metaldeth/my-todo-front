import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import css from './app.module.scss';
import { useAppDispatch } from './app/hooks';
import { ButtonLink } from './components/button/buttonLink';
import { Loader } from './components/loader';
import { PrivateRouteGuard } from './domains/auth/components/AuthRoute';
import { AuthModule } from './domains/auth/parts';
import { fetchUserData } from './domains/auth/state';
import { TaskList } from './domains/taskList/path';
import { TestDrive } from './domains/testDrive';

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
      <Routes>
        <Route element={<PrivateRouteGuard needAuth={false}/>}>
          <Route path='/auth/*' element={<AuthModule/>}/>
        </Route>
        <Route element={<PrivateRouteGuard needAuth={false}/>}>
          <Route path='/taskList/*' element={<TaskList/>}/>
        </Route>
        <Route element={<PrivateRouteGuard needAuth={true}/>}>
          <Route path='/test' element={<TestDrive/>}/>
        </Route>
        <Route path='/*' element={<ButtonLink label='taskList' url='/taskList' />}/>
      </Routes>
    </div>
  );
}

export default App;
