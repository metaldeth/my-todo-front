import { FC, useEffect, useState } from "react";
import { Navigation } from "./navigation";
import css from './styles.module.scss';
import classNames from 'classnames';
import { TestDriveIcons } from "../../testDrive/testDriveIcons";
import { useAppDispatch } from "../../../app/hooks";
import { fetchListOfTaskList } from "../state/taskList";
import { Loader } from "../../../components/loader";
import { AsideSettingTaskList, CreateTaskList, ListOfTaskList, SettingTaskList } from "./taskList";
import { TaskContainer } from "./task";
import { SettingTask } from "./task/settingTask";

export const ToDo: FC<{}> = () => {
  const dispatch = useAppDispatch();

  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ isLoadedTask, setIsLoadedTask ] = useState(false);
  const [ selectedTaskListId, setSelectedTaskListId ] = useState<number | null>(null);
  const [ isOpenAside, setIsOpenAside ] = useState(true);
  const [ isCreateTaskList, setIsCreateTaskList ] = useState(false);
  const [ isOpedEditTaskList, setIsOpenEditTaskList ] = useState(false);
  const [ isAsideSettingTaskList, setIsAsideSettingTaskList ] = useState(false);
  const [ isOpenSettingTaskList, setIsOpenSettingTaskList ] = useState(false);
  const [ selectedOpenSettingTaskId, setSelectedOpenSettingTaskId ] = useState<number | null>(null);
  const [ selectedEditTaskId, setSelectedEditTaskId ] = useState<number | null>(null);


  useEffect(() => {
    dispatch(fetchListOfTaskList())
      .then(() => setIsLoaded(true));
  }, [dispatch, isLoaded]);
  
  if(!isLoaded) return <Loader/>;

  return(
    <>
      {/* Блок модальных окон */}
      {isCreateTaskList && 
        <CreateTaskList 
          setIsCreateTaskList={setIsCreateTaskList}
        />
      }
      {isAsideSettingTaskList && 
        <AsideSettingTaskList 
          setIsAsideSettingTaskList={setIsAsideSettingTaskList}
          selectedTaskListId={selectedTaskListId}
          setIsLoaded={setIsLoaded}
          setSelectedTaskListId={setSelectedTaskListId}
        />
      }
      {isOpenSettingTaskList && 
        <SettingTaskList
          selectedTaskListId={selectedTaskListId}
          setIsLoaded={setIsLoaded}
          setIsOpenEditTaskList={setIsOpenEditTaskList}
          setIsOpenSettingTaskList={setIsOpenSettingTaskList}
          setSelectedTaskListId={setSelectedTaskListId}
        />
      }
      {selectedOpenSettingTaskId && 
        <SettingTask
          selectedTaskListId={selectedTaskListId}
          setIsLoaded={setIsLoaded}
          setSelectedOpenSettingTaskId={setSelectedOpenSettingTaskId}
          selectedSettingTaskId={selectedOpenSettingTaskId}
          setSelectedEditTaskId={setSelectedEditTaskId}
        />
      } 


      <Navigation
        isOpenAside={isOpenAside}
        setIsOpenAside={setIsOpenAside}
        setSelectedTaskListId={setSelectedTaskListId}
      />
      {isOpenAside &&
        <aside className={classNames(css.assideBar)}>
          <ListOfTaskList
            selectedTaskListId={selectedTaskListId}
            setSelectedTaskListId={setSelectedTaskListId}
            setIsLoadedTask={setIsLoadedTask}
            setIsCreateTaskList={setIsCreateTaskList}
            setIsAsideSettingTaskList={setIsAsideSettingTaskList}
          />
        </aside> 
      }
      <div className={classNames(isOpenAside && css.contentBox)}>
        {selectedTaskListId 
          ? <TaskContainer
              selectedTaskListId={selectedTaskListId}
              isLoadedTask={isLoadedTask}
              setIsLoadedTask={setIsLoadedTask}
              isOpedEditTaskList={isOpedEditTaskList}
              setIsOpenEditTaskList={setIsOpenEditTaskList}
              setSelectedOpenSettingTaskId={setIsOpenSettingTaskList}
              setIsOpenSettingTaskId={setSelectedOpenSettingTaskId}
              selectedEditTaskId={selectedEditTaskId}
              setSelectedEditTaskId={setSelectedEditTaskId}
            />
          : null
        }
        {/* <TestDriveIcons/> */}
      </div>
    </>
  )
}