import { memo, useState } from "react";
import css from './styles.module.scss';
import classNames from 'classnames';
import { TaskListDTO } from "../../../../../types/serverInterface/task/taskListDTO";
import { AsideHeader } from "./asideHeader";
import { TaskListItem } from "./taskListItem";
import { useNavigate, useParams } from "react-router";

export type ListOfTaskListPropsType = {
  caption: string;
  list: TaskListDTO[];
  selectedTaskListId?: number;
}

export const ViewList = memo<ListOfTaskListPropsType>(({ 
  caption,
  list,
  selectedTaskListId
}) => {
  const navigate = useNavigate()

  const [ isOpenTaskList, setIsOpenTaskList ] = useState(true);

  const onSelectedTaskListId = (taskListId: number | null) => {
    navigate(`/taskList/${taskListId}`);
  }



  return(
    <div className={classNames(css.assideBar_itemGroup)}>
      <div className={classNames(css.assideBar_groupHead)}>
        <AsideHeader
          caption={caption}
          isOpenTaskList={isOpenTaskList}
          onOpenTaskList={() => setIsOpenTaskList(!isOpenTaskList)}
        />
      </div>
      {list.map(taskList => (
        <TaskListItem
          taskList={taskList}
          onSelectTaskListId={onSelectedTaskListId}
          isSelect={selectedTaskListId === taskList.id}
        />
      ))}
    </div>
  )
})