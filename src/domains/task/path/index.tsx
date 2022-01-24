import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { ListOfTaskList } from "./listOfTaskList";
import { AppBar } from '../../../components/appBar'
import { AppBarButton } from "../../../components/appBar/button";
import { useAppDispatch } from "../../../app/hooks";
import { fetchListOfTaskList } from "../state";
import { Loader } from "../../../components/loader";
import { CreateTaskList } from "./createTaskList";

export const TaskList: FC<{}> = () => {
  const dispatch = useAppDispatch();

  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    dispatch(fetchListOfTaskList())
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  if(!isLoaded) return <Loader/>;

  return(
    <>
      <AppBar>
        <AppBarButton
          link="/taskList/list"
          children='home'
        />
        <AppBarButton
          link="/taskList/create"
          children='create'
        />
      </AppBar>
      <Routes>
        <Route path='list' element={<ListOfTaskList/>}/>
        <Route path='create' element={<CreateTaskList/>}/>
      </Routes>
    </>
  )
}