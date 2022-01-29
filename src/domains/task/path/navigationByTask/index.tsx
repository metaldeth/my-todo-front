import { FC } from "react";
import { useParams } from "react-router";
import { AppBar } from "../../../../components/appBar";
import { AppBarButton } from "../../../../components/appBar/button";
import { RouteTaskListParam } from "../../../taskList/types";

export const NavigationByTask: FC<{}> = (props) => {
  const { taskListId } = useParams<RouteTaskListParam>();
  const convertedId = Number(taskListId);

  return(
    <AppBar>
      <AppBarButton
        link={`/taskList/list`}
        children='home'
      />
      <AppBarButton
        link={`/taskList/${convertedId}/card`}
        children='listOfTask'
      />
      <AppBarButton
        link={`/taskList/${convertedId}/card/task/create`}
        children='createTask'
      />
    </AppBar>
  )
}