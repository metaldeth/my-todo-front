import { FC, memo, useState } from "react";
import { useAppSelector } from "../../../../app/hooks";
import css from './styles.module.scss';
import classNames from 'classnames';
import { selectListOfTaskList } from "../../state/taskList";
import { ItemOfTaskList } from ".";
import { 
  AiOutlineRight,
  AiOutlineDown,
  AiOutlinePlus
} from "react-icons/ai";
import { IconButton } from "../../../../components/appBar";

export type ListOfTaskListPropsType = {
  setSelectedTaskListId: React.Dispatch<React.SetStateAction<number | null>>;
  selectedTaskListId: number | null;
  setIsLoadedTask: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCreateTaskList: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAsideSettingTaskList: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ListOfTaskList: FC<ListOfTaskListPropsType> = memo(({ 
  selectedTaskListId, 
  setSelectedTaskListId,
  setIsLoadedTask,
  setIsCreateTaskList,
  setIsAsideSettingTaskList,
}) => {
  const listOfTaskList = useAppSelector(selectListOfTaskList);

  const [ isOpenTaskList, setIsOpenTaskList ] = useState(true); 
 

  const renderListOfTaskList = () => 
    listOfTaskList.map(taskList => {
      return (
        <ItemOfTaskList
          key={taskList.id}
          taskList={taskList}
          setSelectedTaskListId={setSelectedTaskListId}
          selectedTaskListId={selectedTaskListId}
          setIsLoadedTask={setIsLoadedTask}
          setIsAsideSettingTaskList={setIsAsideSettingTaskList}
        />
      )
    })
  

  return(
    <div 
      className={classNames(css.assideBar_itemGroup)} 
    >
      <div 
        className={classNames(css.assideBar_groupHead)} 
      >
        <div onClick={() => setIsOpenTaskList(!isOpenTaskList)}>
          <div       
            className={classNames(css.asideBar_itemIcon)}
          >{isOpenTaskList ? <AiOutlineDown/> : <AiOutlineRight/>}</div>
          <span className={classNames(css.assideBas_headLabel)}>Списки задач</span>
        </div>
        <div>
          <IconButton
            onClick={() => setIsCreateTaskList(true)}
          >
            <AiOutlinePlus/>
          </IconButton>
        </div>
      </div>
      {isOpenTaskList ? renderListOfTaskList() : null}
    </div>
  )
})