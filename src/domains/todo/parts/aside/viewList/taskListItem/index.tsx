import { memo, useState } from "react";
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
  isSelect: boolean;
  onSelectTaskList: (taskListId:  number | null) => void;
}

export const TaskListItem = memo<TaskListItemPropsType>(({ 
  taskList,
  isSelect,
  onSelectTaskList,
}) => {
  const [ isAsideSettingTaskList, setIsAsideSettingTaskList ] = useState(false);

  const handleChange = () => onSelectTaskList(taskList.id);

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
          onSelectTaskList={onSelectTaskList}
          taskList={taskList}
        />
      </Modal>
    </div>
  )
})