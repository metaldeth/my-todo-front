import classNames from "classnames";
import { FC, useState } from "react";
import { useAppDispatch } from "../../../../../../../app/hooks";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import css from './styles.module.scss'
import { editTask } from "../../../../../state/task";
import { TaskDTO } from "../../../../../../../types/serverInterface/task/taskDTO";

export type CompletedTaskPropsType = {
  task: TaskDTO;
  selectedTaskListId: number;
}

export const CompletedTask: FC<CompletedTaskPropsType> =  ({ task, selectedTaskListId }) => {
  const [ isHoverCheckBox, setIsHoverCheckBox ] = useState(task.isComplete);

  const dispatch = useAppDispatch();

  const completedTask = () => {
    const updatedTask: TaskDTO = {
      ...task,
      isComplete: isHoverCheckBox
    }
    dispatch(editTask({ data: updatedTask, taskId: task.id, taskListId: selectedTaskListId }))
  }

  return(
    <div 
      className={classNames(css.asideBar_itemIcon, css.icon_xLarge)}
      onMouseEnter={() => setIsHoverCheckBox(!task.isComplete)}
      onMouseLeave={() => setIsHoverCheckBox(task.isComplete)}
      onClick={() => completedTask()}
    >
      {isHoverCheckBox ? <BsCheckCircle/> : <BsCircle/>}
    </div>
  )
}