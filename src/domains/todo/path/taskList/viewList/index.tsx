import { memo } from "react";
import { useParams } from "react-router";
import { TaskListDTO } from "../../../../../types/serverInterface/task/taskListDTO";
import { RouteTaskListParam } from "../types";
import { ViewList } from "./viewList";

export type ViewListContainerPropsType = {
  list: TaskListDTO[];
  caption: string;
}

export const ViewListContainer = memo<ViewListContainerPropsType>(({ 
  caption,
  list
}) => {
  return(
    <ViewList
      caption={caption}
      list={list}
    />
  )
})

export const ViewListContainerBySelectTaskList = memo<ViewListContainerPropsType>(({ 
  caption,
  list
}) => {
  const { taskListId } = useParams<RouteTaskListParam>();
  const convertedId = Number(taskListId);
  return(
    <ViewList
      caption={caption}
      list={list}
      selectedTaskListId={convertedId}
    />
  )
})