import { FC, memo, useState } from "react";
import { useAppSelector } from "../../../../app/hooks";
import { selectListOfTaskByTaskListId } from "../../state/task";
import { TaskItem } from "./taskItem";
import css from './styles.module.scss';
import classNames from 'classnames';
import {
  AiOutlinePlus
} from 'react-icons/ai'
import { Button } from "../../../../components/button";
import { CreateTask } from ".";

export type ListOfTaskPropsType = {
  selectedTaskListId: number;
  setIsOpenSettingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedEditTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  selectedEditTaskId: number | null;
}

export const ListOfTask: FC<ListOfTaskPropsType> = memo(({
  selectedTaskListId,
  setIsOpenSettingTaskId,
  selectedEditTaskId,
  setSelectedEditTaskId
}) => {
  const [ isOpenCreate, setIsOpenCreate ] = useState(false);

  const listOfTask = useAppSelector(selectListOfTaskByTaskListId(selectedTaskListId));
  return(
    <>
      {listOfTask.map(task => 
        <TaskItem 
          key={task.id} 
          task={task} 
          setIsOpenSettingTaskId={setIsOpenSettingTaskId}
          selectedEditTaskId={selectedEditTaskId}
          setSelectedEditTaskId={setSelectedEditTaskId}
        />)}
      { isOpenCreate 
        ?<CreateTask
          selectedTaskListId={selectedTaskListId}
          setIsOpenCreate={setIsOpenCreate}
        />
        :<div className={css.createTask} onClick={() => setIsOpenCreate(true)}>
          <div className={css.createTask_button}>
            <AiOutlinePlus/> Добавить задачу
          </div>
        </div> 
      }
    </>
  )
})