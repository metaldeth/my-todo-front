import { memo, useEffect, useState } from "react";
import { Navigation } from "./parts/navigation";
import css from './styles.module.scss';
import classNames from 'classnames';
import { useAppDispatch } from "../../app/hooks";
import { fetchListOfTaskList } from "./state/taskList";
import { Loader } from "../../components/loader";
import { Aside } from './parts/aside'
import { TaskListContent } from "./parts/aside/taskListContent";
import { Route, Routes } from "react-router";

export const ToDo = memo(() => { 
  const dispatch = useAppDispatch();

  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ isOpenAside, setIsOpenAside ] = useState(true);

  useEffect(() => {
    dispatch(fetchListOfTaskList())
      .then(() => setIsLoaded(true));
  }, [dispatch, isLoaded]);
  
  if(!isLoaded) return <Loader/>;

  return(
    <>
      <Navigation
        onOpenAside={() => setIsOpenAside(!isOpenAside)}
      />
      {isOpenAside &&
        <Aside/>
      }
      <div className={classNames(isOpenAside && css.contentBox)}>
        <Routes>
          <Route path='/taskList/:taskListId/*' element={<TaskListContent/>}/>
        </Routes>
      </div>
    </>
  )
})