import { memo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate, useParams } from "react-router";
import { useAppSelector } from "../../../../../app/hooks";
import { IconButton } from "../../../../../components/appBar";
import { RouteTaskListParam, RouteTaskParam } from "../../../../../types/routeTypes/types";
import { TaskDTO } from "../../../../../types/serverInterface/task/taskDTO";
import { selectTaskById } from "../../../state/task";
import { CommentContainer } from "../../comment";
import css from './styles.module.scss';

export type TaskModalPropsType = {
}

export const TaskModal = memo<TaskModalPropsType>(({}) => {
  const { taskListId } = useParams<RouteTaskListParam>();
  const { taskId } = useParams<RouteTaskParam>();
  const convertedTaskListId = Number(taskListId);
  const convertedTaskId = Number(taskId);

  const navigate = useNavigate();

  const task = useAppSelector(selectTaskById(convertedTaskId));

  return(
    <div className={css.taskModal_box}>
      <div className={css.taskContainer_label}>{task.caption}</div>
      <CommentContainer
        taskId={convertedTaskId}
      />
      <IconButton
        onClick={() => navigate(`/taskList/${convertedTaskListId}`)}
        label="Отмена"
      >
        <AiOutlineClose/>
      </IconButton>
    </div>
  )
})