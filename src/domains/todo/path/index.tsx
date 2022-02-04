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
import { Modal } from "./modal";

export const ToDo: FC<{}> = () => {
  const dispatch = useAppDispatch();

  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ isLoadedTask, setIsLoadedTask ] = useState(false);
  const [ isOpenAside, setIsOpenAside ] = useState(true);
  const [ selectedTaskListId, setSelectedTaskListId ] = useState<number | null>(null);


  useEffect(() => {
    dispatch(fetchListOfTaskList())
      .then(() => setIsLoaded(true));
  }, [dispatch, isLoaded]);
  
  if(!isLoaded) return <Loader/>;

  return(
    <>
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
          />
        </aside> 
      }
      <div className={classNames(isOpenAside && css.contentBox)}>
        {selectedTaskListId 
          ? <TaskContainer
              selectedTaskListId={selectedTaskListId}
              isLoadedTask={isLoadedTask}
              setIsLoadedTask={setIsLoadedTask}
              setIsLoaded={setIsLoaded}
              setSelectedTaskListId={setSelectedTaskListId}
            />
          : null
        }
        {/* <TestDriveIcons/> */}
      </div>
    </>
  )
}