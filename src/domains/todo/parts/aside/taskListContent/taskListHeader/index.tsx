import { memo } from "react";
import { BsGrid3X2Gap } from "react-icons/bs";
import { IconButton } from "../../../../../../components/appBar";
import { TaskListDTO } from "../../../../../../types/serverInterface/task/taskListDTO";
import { EditTaskList } from "../../editTaskList";
import css from './styles.module.scss'

export type TaskListHeaderPropsType = {
  isOpenEdit: boolean;
  taskList: TaskListDTO;

  onOpenStatusEdit: (value: boolean) => void;
  onOpenSetting: VoidFunction
}

export const TaskListHeader = memo<TaskListHeaderPropsType>(({
  isOpenEdit,
  taskList,

  onOpenStatusEdit,
  onOpenSetting
}) => {
  return(
    <header className={css.taskListCard_header}>
        {isOpenEdit &&
          <EditTaskList
            onCloseEdit={() => onOpenStatusEdit(false)}
            selectedTaskListId={taskList.id}
          />
        }
        { !isOpenEdit && 
          <div 
            className={css.taskListCard_label} 
            onClick={() => onOpenStatusEdit(true)}
          >{taskList.caption}</div>
        }
        <div className={css.taskListCard_buttonGroup}>
          <IconButton
            onClick={() => onOpenSetting()}
          >
            <BsGrid3X2Gap/>
          </IconButton>
        </div>
      </header>
  )
})