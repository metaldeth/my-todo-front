import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { AppBar } from '../../../components/appBar'
import { AppBarButton } from "../../../components/appBar/button";
import { useAppDispatch } from "../../../app/hooks";
import { Loader } from "../../../components/loader";
import { ContentContainer } from "../../../components/contentContainer";
import { useParams } from "react-router";
import { RouteTaskParam } from "../types";
import { fetchListOfTaskByTaskListId } from "../state";
import { TaskCard } from "./taskCard";
import { EditTask } from "./editTask";
import { RouteTaskListParam } from "../../taskList/types";
import { NavigationByTask } from "./navigationByTask";
import { RemoveTask } from "./removeTask";

export const Task: FC<{}> = () => {
  const { taskId } = useParams<RouteTaskParam>();
  const convertedId = Number(taskId);

  const { taskListId } = useParams<RouteTaskListParam>();
  const convertedTaskListId = Number(taskListId);

  const dispatch = useAppDispatch();

  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    dispatch(fetchListOfTaskByTaskListId(convertedId))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  if(!isLoaded) return <Loader/>;

  return(
    <>
      <NavigationByTask/>
      <ContentContainer>
        <Routes>
          <Route path='edit' element={<EditTask taskListId={convertedTaskListId}/>}/>
          <Route path='remove' element={<RemoveTask/>}/>
          <Route path='card' element={<TaskCard/>}/>
        </Routes>
      </ContentContainer>
    </>
  )
}