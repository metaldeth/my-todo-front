import { FC, memo, useEffect, useState } from "react";
import { ListOfTask } from ".";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { Loader } from "../../../../components/loader";
import { fetchListOfTaskByTaskListId } from "../../state/task";
import css from './styles.module.scss';
import classNames from 'classnames';
import { selectTaskListById } from "../../state/taskList";
import {
  BsChatText,
  BsGrid3X2Gap
} from 'react-icons/bs'
import {
  AiOutlineUsergroupAdd,
} from 'react-icons/ai'
import { IconButton } from "../../../../components/appBar";
import { EditTaskList } from "../taskList";

export type TaskContainerPropsType = {
  selectedTaskListId: number;
  setIsLoadedTask: React.Dispatch<React.SetStateAction<boolean>>;
  isLoadedTask: boolean;
  setIsOpenEditTaskList: React.Dispatch<React.SetStateAction<boolean>>;
  isOpedEditTaskList: boolean;
  setSelectedOpenSettingTaskId: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenSettingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedEditTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  selectedEditTaskId: number | null;
}

export const TaskContainer: FC<TaskContainerPropsType> = memo(({ 
  selectedTaskListId, 
  isLoadedTask, 
  setIsLoadedTask, 
  setIsOpenEditTaskList,
  isOpedEditTaskList,
  setSelectedOpenSettingTaskId,
  setIsOpenSettingTaskId,
  selectedEditTaskId,
  setSelectedEditTaskId,
}) => {

  const dispatch = useAppDispatch();
  const taskList = useAppSelector(selectTaskListById(selectedTaskListId));

  useEffect(() => {
    dispatch(fetchListOfTaskByTaskListId(selectedTaskListId))
      .then(() => setIsLoadedTask(true));
  }, [dispatch, selectedTaskListId])

  if(!isLoadedTask) return <Loader/>;

  return(
    <div className={classNames(css.taskContainer)}>
      <header className={css.taskContainer_header}>
        {isOpedEditTaskList 
        ? <EditTaskList
          selectedTaskListId={selectedTaskListId}
          setIsOpenEditTaskList={setIsOpenEditTaskList}
        />
        :<div className={css.taskContainer_label} onClick={() => setIsOpenEditTaskList(true)}>{taskList.caption}</div>
        }
        <div className={css.taskContainer_buttonGroup}>
          {/* <IconButton
            onClick={() => {}}
            label='Коментарии'
          >
            <BsChatText/>
          </IconButton> */}
          <IconButton
            onClick={() => {}}
            label='Пригласить'
          >
            <AiOutlineUsergroupAdd/>
          </IconButton>
          <IconButton
            onClick={() => setSelectedOpenSettingTaskId(true)}
          >
            <BsGrid3X2Gap/>
          </IconButton>
        </div>
      </header>
      <ListOfTask
        setIsOpenSettingTaskId={setIsOpenSettingTaskId}
        selectedTaskListId={selectedTaskListId}
        selectedEditTaskId={selectedEditTaskId}
        setSelectedEditTaskId={setSelectedEditTaskId}
      />
    </div>
  )
})