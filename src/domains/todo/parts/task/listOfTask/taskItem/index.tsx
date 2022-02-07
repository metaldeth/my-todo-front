import { memo, useState } from "react";
import { TaskDTO } from "../../../../../../types/serverInterface/task/taskDTO";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEllipsis } from "react-icons/ai";
import { IconButton } from "../../../../../../components/appBar";
import { EditTask } from "../../editTask";
import { CompletedTask } from "./completedTask";
import css from './styles.module.scss';
import { removeTask } from "../../../../state/task";
import { useAppDispatch } from "../../../../../../app/hooks";

export type TaskItemPropsType = {
  task: TaskDTO,
  selectedTaskListId: number;
}

export const TaskItem = memo<TaskItemPropsType>(({ 
  task,
  selectedTaskListId,
 }) => {
  const dispatch = useAppDispatch();

  const [ isHoverItem, setIsHoverItem ] = useState(false);
  const [ isEdit, setIsEdit ] = useState(false);

  const remove = () => {
    if(!selectedTaskListId) return;
    dispatch(removeTask({taskListId: selectedTaskListId, taskId: task.id}))
  };

  return(
    <div 
      className={css.taskItem}
      onMouseEnter={() => setIsHoverItem(true)}
      onMouseLeave={() => setIsHoverItem(false)}  
    >
      {isEdit && 
        <EditTask task={task} onCLoseEdit={() => setIsEdit(false)} selectedTaskListId={selectedTaskListId}/>
      }
      {/* TODO: попробовать улучшить прозрачность кода */}
      {!isEdit && 
        <>
          <div className={css.taskItem_content}>
            <CompletedTask
              task={task}
              selectedTaskListId={selectedTaskListId}
            />
            <div>
              <div className={css.taskItem_caption}>{task.caption}</div>
              <div className={css.taskItem_description}>{task.description}</div>
            </div>              
          </div>
          <div className={css.taskItem_content}>
            {isHoverItem && 
              <>
                <IconButton
                  onClick={() => setIsEdit(true)}
                >
                  <AiOutlineEdit/>
                </IconButton>
                <IconButton
                  onClick={remove}
                >
                  <AiOutlineDelete/>
                </IconButton>
              </>
            }
          </div>
        </>
      }
    </div>
  )
})