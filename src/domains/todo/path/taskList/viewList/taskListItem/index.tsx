import { FC, memo, useState } from "react";
import css from './styles.module.scss';
import classNames from 'classnames';
import { TaskListDTO } from "../../../../../../types/serverInterface/task/taskListDTO";
import { BsCircleFill } from 'react-icons/bs'
import { AiOutlineEllipsis } from "react-icons/ai";
import { IconButton } from "../../../../../../components/appBar";
import { Modal } from "../../../../../../components/modal";
import { AsideSettingTaskList } from "../asideSettingTaskList";

export type TaskListItemPropsType = {
  taskList: TaskListDTO;
  onSelectTaskListId: (taskListId:  number | null) => void;
  isSelect: boolean;
}

export const TaskListItem = memo<TaskListItemPropsType>(({ 
  taskList,
  onSelectTaskListId,
  isSelect,
}) => {
  const [ isAsideSettingTaskList, setIsAsideSettingTaskList ] = useState(false);

  const handleChange = () => {
    onSelectTaskListId(taskList.id);
  }

  return(
    <div 
      className={classNames(
        css.assideBar_item, 
        isSelect && css.selected 
      )} 
      onClick={handleChange}
    >
      <div>
        <div className={classNames(css.asideBar_itemIcon, css.icon_xSmall)}>
          <BsCircleFill/>
        </div>
        {taskList.caption}
      </div>
      <div>
        <IconButton
          onClick={() => setIsAsideSettingTaskList(true)}
        >
          <AiOutlineEllipsis/>
        </IconButton>
      </div>
      <Modal
        isOpen={isAsideSettingTaskList}
      >
        <AsideSettingTaskList
          onClose={() => setIsAsideSettingTaskList(false)}
          onSelectTaskListId={onSelectTaskListId}
          selectedTaskListId={taskList.id}
        />
      </Modal>
    </div>
  )
})