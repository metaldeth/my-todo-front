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
import { EditTaskList, SettingTaskList } from "../taskList";
import { ListOfCompletedTaskContainer } from "./listOfCompletedTaskContainer";
import { Modal } from "../modal";

export type TaskContainerPropsType = {
  setSelectedTaskListId: React.Dispatch<React.SetStateAction<number | null>>
  setIsLoadedTask: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTaskListId: number;
  isLoadedTask: boolean;
}

export const TaskContainer: FC<TaskContainerPropsType> = memo(({ 
  selectedTaskListId, 
  isLoadedTask, 
  setIsLoadedTask, 
  setSelectedTaskListId,
  setIsLoaded,
}) => {

  const [ isOpedEditTaskList, setIsOpenEditTaskList ] = useState(false);
  const [ isOpenSettingTaskList, setIsOpenSettingTaskList ] = useState(false);
  const [ isShowCompletedTask, setIsShowCompletedTask ] = useState(false);



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
          <IconButton
            onClick={() => {}}
            label='Пригласить'
          >
            <AiOutlineUsergroupAdd/>
          </IconButton>
          <IconButton
            onClick={() => setIsOpenSettingTaskList(true)}
          >
            <BsGrid3X2Gap/>
          </IconButton>
        </div>
      </header>
      <ListOfTask
        selectedTaskListId={selectedTaskListId}
      />
      {
        isShowCompletedTask 
        && !!selectedTaskListId 
        && <ListOfCompletedTaskContainer 
          selectedTaskListId={selectedTaskListId}
        />
      }

      <Modal
        isOpen={isOpenSettingTaskList}
        onClose={() => {}}
      >
        <SettingTaskList 
          setIsOpenEditTaskList={setIsOpenEditTaskList}
          isShowCompletedTask={isShowCompletedTask}
          selectedTaskListId={selectedTaskListId}
          setIsLoaded={setIsLoaded}
          setIsOpenSettingTaskList={setIsOpenSettingTaskList}
          setIsShowCompletedTask={setIsShowCompletedTask}
          setSelectedTaskListId={setSelectedTaskListId}
        />
      </Modal>
    </div>
  )
})