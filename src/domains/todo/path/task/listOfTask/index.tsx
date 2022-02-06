import { memo, useState } from "react";
import { useAppSelector } from "../../../../../app/hooks";
import { selectListOfTaskByTaskListId } from "../../../state/task";
import { TaskItem } from "./taskItem";
import css from './styles.module.scss';
import {AiOutlinePlus} from 'react-icons/ai'
import { CreateTask } from "../createTask";

export type ListOfTaskPropsType = {
  selectedTaskListId: number;
}

export const ListOfTask = memo<ListOfTaskPropsType>(({
  selectedTaskListId,
}) => {
  const [ isOpenCreate, setIsOpenCreate ] = useState(false);

  const listOfTask = useAppSelector(selectListOfTaskByTaskListId);
  return(
    <>
      {listOfTask.map(task => 
        <TaskItem 
          key={task.id} 
          task={task} 
          selectedTaskListId={selectedTaskListId}
        />)
      }
      { isOpenCreate &&
        <CreateTask
          selectedTaskListId={selectedTaskListId}
          onCloseCreate={() => setIsOpenCreate(false)}
        />
      }
      { !isOpenCreate &&
        <div className={css.createTask} onClick={() => setIsOpenCreate(true)}>
          <div className={css.createTask_button}>
            <AiOutlinePlus/> Добавить задачу
          </div>
        </div> 
      }
    </>
  )
})