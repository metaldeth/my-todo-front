import { FC } from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../../../app/hooks";
import { selectTaskById } from "../../state";
import { RouteTaskParam } from "../../types";

export const TaskCard: FC<{}> = (props) => {
  const { taskId } = useParams<RouteTaskParam>();
  const convertedId = Number(taskId);

  const task = useAppSelector(selectTaskById(convertedId));

  return(
    <>
      <h2>{task.caption}</h2>
      <h3>{task.description}</h3>
    </>
  )
}