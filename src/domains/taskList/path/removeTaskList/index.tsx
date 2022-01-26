import { FC } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch } from "../../../../app/hooks";
import { Button } from "../../../../components/button";
import { ButtonLink } from "../../../../components/button/buttonLink";
import { Card } from "../../../../components/card";
import { removeTaskList } from "../../state";
import { RouteTaskListParam } from "../../types";

export const RemoveTaskList: FC<{}> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const { taskListId } = useParams<RouteTaskListParam>();
  const convertedId = Number(taskListId);

  const handleClick = () => {
    console.log('taskListId, ', taskListId);
    console.log('convertedId, ', convertedId);
    
    dispatch(removeTaskList(convertedId))
      .then(() => navigate('/taskList/list'))
  }

  return(
    <Card>
      <Button
        label="delete"
        onClick={handleClick}
      />
      <ButtonLink
        label="cancel"
        url="/taskList/list"
      />
    </Card>
  )
}