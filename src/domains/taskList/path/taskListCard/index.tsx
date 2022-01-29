import { FC } from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../../../app/hooks";
import { AppBar } from "../../../../components/appBar";
import { AppBarButton } from "../../../../components/appBar/button";
import { CreateTask } from "../../../task/path/createTask";
import { ListOfTaskContainer } from "../../../task/path/listOfTask/listOfTaskContainer";
import { selectTaskListById } from "../../state";
import { RouteTaskListParam } from "../../types";

export const TaskListCard: FC<{}> = () => {
  const { taskListId } = useParams<RouteTaskListParam>();
  const convertedId = Number(taskListId);

  const taskList = useAppSelector(selectTaskListById(convertedId));

  return(
    <>
      <h3>{taskList.caption}</h3>
      <ListOfTaskContainer
        taskListId={convertedId}
      />
    </>
  )
}