import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { ListOfTaskList } from "./listOfTaskList";
import { AppBar } from '../../../components/appBar'
import { AppBarButton } from "../../../components/appBar/button";
import { useAppDispatch } from "../../../app/hooks";
import { Loader } from "../../../components/loader";
import { CreateTaskList } from "./createTaskList";
import { ContentContainer } from "../../../components/contentContainer";
import { EditTaskList } from "./editTaskList";
import { RemoveTaskList } from "./removeTaskList";
import { TaskListCard } from "./taskListCard";
import { fetchListOfTaskList } from "../state";
import { CreateTask } from "../../task/path/createTask";
import { NavigationTaskList } from "./navigationByTaskList";
import { NavigationByTask } from "../../task/path/navigationByTask";

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
      
      <Routes>
        <Route path=':taskListId/card/*' element={
          <NavigationByTask/>
        }/>
        <Route path='*' element={
          <NavigationTaskList/>
        }/>
      </Routes>
      <ContentContainer>
        <Routes>
          <Route path='list' element={<ListOfTaskList/>}/>
          <Route path='create' element={<CreateTaskList/>}/>
          <Route path=':taskListId/edit' element={<EditTaskList/>}/>
          <Route path=':taskListId/remove' element={<RemoveTaskList/>}/>
          <Route path=':taskListId/card/task/create' element={<CreateTask/>}/>
          <Route path=':taskListId/card' element={<TaskListCard/>}/>
        </Routes>
      </ContentContainer>
    </>
  )
}