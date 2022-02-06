import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IconButton } from "../../../../../components/appBar";
import { TaskDTO } from "../../../../../types/serverInterface/task/taskDTO";
import { CommentContainer } from "../../comment";
import css from './styles.module.scss';

export type TaskModalPropsType = {
  task: TaskDTO;
  onCLoseModal: VoidFunction;
}

export const TaskModal: FC<TaskModalPropsType> = ({
  task,
  onCLoseModal,
}) => {
  return(
    <div className={css.taskModal_box}>
      <div className={css.taskContainer_label}>{task.caption}</div>
      <CommentContainer
        taskId={task.id}
      />
      <IconButton
        onClick={() => onCLoseModal()}
        label="Отмена"
      >
        <AiOutlineClose/>
      </IconButton>
    </div>
  )
}