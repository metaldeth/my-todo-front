import { FC, useEffect, useState } from "react";
import { Navigation } from "./navigation";
import css from './styles.module.scss';
import classNames from 'classnames';
import { TestDriveIcons } from "../../testDrive/testDriveIcons";
import { useAppDispatch } from "../../../app/hooks";
import { fetchListOfTaskList } from "../state/taskList";
import { Loader } from "../../../components/loader";
import { ListOfTaskList } from "./taskList";
import { TaskContainer } from "./task";

export const ToDo: FC<{}> = () => {
  const dispatch = useAppDispatch();

  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ isLoadedTask, setIsLoadedTask ] = useState(false);
  const [ selectedTaskListId, setSelectedTaskListId ] = useState<number | null>(null);
  const [ isOpenAside, setIsOpenAside ] = useState(true);

  useEffect(() => {
    dispatch(fetchListOfTaskList())
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  if(!isLoaded) return <Loader/>;

  return(
    <>
      <Navigation
        isOpenAside={isOpenAside}
        setIsOpenAside={setIsOpenAside}
      />
      {isOpenAside 
        &&<aside className={classNames(css.assideBar)}>
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
            />
          : null
        }
        {/* <TestDriveIcons/> */}
      </div>
    </>
  )
}