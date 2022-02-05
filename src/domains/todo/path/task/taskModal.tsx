import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IconButton } from "../../../../components/appBar";
import { TaskDTO } from "../../../../types/serverInterface/task/taskDTO";
import { CommentContainer } from "../comment";
import css from './styles.module.scss';

export type TaskComalPropsType = {
  task: TaskDTO;
  setIsOpenTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TaskModal: FC<TaskComalPropsType> = ({
  task,
  setIsOpenTaskModal,
}) => {
  return(
    <div className={css.taskModal_box}>
      <div className={css.taskContainer_label}>{task.caption}</div>
      <CommentContainer
        taskId={task.id}
      />
      <IconButton
        onClick={() => setIsOpenTaskModal(false)}
        label="Отмена"
      >
        <AiOutlineClose/>
      </IconButton>
    </div>
  )
}