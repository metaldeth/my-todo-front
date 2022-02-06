import { FC, memo, useEffect, useState } from "react";
import { Navigation } from "./navigation";
import css from './styles.module.scss';
import classNames from 'classnames';
import { useAppDispatch } from "../../../app/hooks";
import { fetchListOfTaskList } from "../state/taskList";
import { Loader } from "../../../components/loader";
import { Asside } from './taskList'
import { TaskListCard } from "./taskList/taskListCard";
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
        <Asside/>
      }
      <div className={classNames(isOpenAside && css.contentBox)}>
        <Routes>
          <Route path='/taskList/:taskListId/*' element={<TaskListCard/>}/>
        </Routes>
      </div>
    </>
  )
})