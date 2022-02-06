import { memo } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsGrid3X2Gap } from "react-icons/bs";
import { IconButton } from "../../../../../../components/appBar";
import { TaskListDTO } from "../../../../../../types/serverInterface/task/taskListDTO";
import { EditTaskList } from "../../editTaskList";
import css from './styles.module.scss'

export type TaskListHeaderPropsType = {
  isOpenEditTaskList: boolean;
  taskList: TaskListDTO;

  onCloseEdit: VoidFunction;
  onOpenEdit: VoidFunction;
  onOpenSettingTaskList: VoidFunction
}

export const TaskListHeader = memo<TaskListHeaderPropsType>(({
  isOpenEditTaskList,
  taskList,

  onCloseEdit,
  onOpenEdit,
  onOpenSettingTaskList
}) => {
  return(
    <header className={css.taskListCard_header}>
        {isOpenEditTaskList 
        ? (
          <EditTaskList
            onCloseEdit={onCloseEdit}
            selectedTaskListId={taskList.id}
          />
        )
        : (
          <div 
            className={css.taskListCard_label} 
            onClick={() => onOpenEdit()}
          >{taskList.caption}</div>
        )
        }
        <div className={css.taskListCard_buttonGroup}>
          <IconButton
            onClick={() => {}}
            label='Пригласить'
          >
            <AiOutlineUsergroupAdd/>
          </IconButton>
          <IconButton
            onClick={() => onOpenSettingTaskList()}
          >
            <BsGrid3X2Gap/>
          </IconButton>
        </div>
      </header>
  )
})