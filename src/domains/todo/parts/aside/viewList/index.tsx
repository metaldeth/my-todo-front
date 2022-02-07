import { memo, useState } from "react";
import css from './styles.module.scss';
import { TaskListDTO } from "../../../../../types/serverInterface/task/taskListDTO";
import { AsideHeader } from "./asideHeader";
import { TaskListItem } from "./taskListItem";
import { useNavigate, useParams } from "react-router";

export type ListOfTaskListPropsType = {
  caption: string;
  list: TaskListDTO[];
  selectedTaskListId?: number | null;
  renderHeaderSlot?: () => JSX.Element;
}

export const ViewList = memo<ListOfTaskListPropsType>(({ 
  caption,
  list,
  selectedTaskListId,
  renderHeaderSlot
}) => {
  const navigate = useNavigate()

  const [ isOpenTaskList, setIsOpenTaskList ] = useState(true);

  const onSelectedTaskList = (taskListId: number | null) => {
    navigate(`/taskList/${taskListId}`);
  }
  
  return(
    <div className={css.assideBar_itemGroup}>
      
    <div className={css.assideBar_groupHead}>
      <AsideHeader
        caption={caption}
        isOpenTaskList={isOpenTaskList}
        onOpenTaskList={() => setIsOpenTaskList(!isOpenTaskList)}
        renderHeaderSlot={renderHeaderSlot}
      />
    </div>
      {isOpenTaskList && list.map(taskList => (
        <TaskListItem
          taskList={taskList}
          onSelectTaskList={onSelectedTaskList}
          isSelect={selectedTaskListId === taskList.id}
        />
      ))}
    </div>
  )
})