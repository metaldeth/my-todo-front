import { FC, memo, useState } from "react";
import css from './styles.module.scss';
import classNames from 'classnames';
import { TaskListDTO } from "../../../../types/serverInterface/task/taskListDTO";
import { BsCircleFill } from 'react-icons/bs'
import { AiOutlineEllipsis } from "react-icons/ai";
import { IconButton } from "../../../../components/appBar";

export type ItemOfTaskListPropsType = {
  taskList: TaskListDTO;
  setSelectedTaskListId: React.Dispatch<React.SetStateAction<number | null>>;
  selectedTaskListId: number | null;
  setIsLoadedTask: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ItemOfTaskList: FC<ItemOfTaskListPropsType> = memo(({ 
  taskList, 
  setSelectedTaskListId, 
  selectedTaskListId,
  setIsLoadedTask
}) => {

  const handleChange = () => {
    (taskList.id === selectedTaskListId) 
      ? setSelectedTaskListId(null) 
      : setSelectedTaskListId(taskList.id);
      setIsLoadedTask(false)
  }

  return(
    <div 
      className={classNames(
        css.assideBar_item, 
        (taskList.id === selectedTaskListId) ? css.selected : null 
      )} 
      onClick={handleChange}
    >
      <div>
        <div className={classNames(css.asideBar_itemIcon, css['icon_x-small'])}>
          <BsCircleFill/>
        </div>
        {taskList.caption}
      </div>
      <div>
        <IconButton
          onClick={() => {}}
        >
          <AiOutlineEllipsis/>
        </IconButton>
      </div>
    </div>
  )
})