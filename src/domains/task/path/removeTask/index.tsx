import { FC } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch } from "../../../../app/hooks";
import { Button } from "../../../../components/button";
import { ButtonLink } from "../../../../components/button/buttonLink";
import { Card } from "../../../../components/card";
import { RouteTaskListParam } from "../../../taskList/types";
import { removeTask } from "../../state";
import { RouteTaskParam } from "../../types";

export const RemoveTask: FC<{}> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const { taskListId } = useParams<RouteTaskListParam>();
  const convertedIdTaskListId = Number(taskListId);

  const { taskId } = useParams<RouteTaskParam>();
  const convertedTaskId = Number(taskId);

  const handleClick = () => {    
    dispatch(removeTask(convertedTaskId))
      .then(() => navigate(`/taskList/${convertedIdTaskListId}/card`))
  }

  return(
    <Card>
      <Button
        label="delete"
        onClick={handleClick}
      />
      <ButtonLink
        label="cancel"
        url={`/taskList/${convertedIdTaskListId}/card`}
      />
    </Card>
  )
}