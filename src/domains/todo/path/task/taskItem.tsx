import { FC, memo, useState } from "react";
import { TaskDTO } from "../../../../types/serverInterface/task/taskDTO";
import { BsCircle, BsCheckCircle, BsChatText } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineEllipsis } from "react-icons/ai";
import css from './styles.module.scss';
import iconCss from '../taskList/styles.module.scss'
import classNames from 'classnames';
import { IconButton } from "../../../../components/appBar";
import { EditTask } from "./editTask";

export type TaskItemPropsType = {
  task: TaskDTO,
  setIsOpenSettingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedEditTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  selectedEditTaskId: number | null;
}

export const TaskItem: FC<TaskItemPropsType> = memo(({ 
  task,
  setIsOpenSettingTaskId,
  selectedEditTaskId,
  setSelectedEditTaskId
 }) => {
  const [ isHoverCheckBox, setIsHoverCheckBox ] = useState(false);
  const [ isHoverItem, setIsHoverItem ] = useState(false);

  return(
    <div 
      className={classNames(css.taskItem)}
      onMouseEnter={() => setIsHoverItem(true)}
      onMouseLeave={() => setIsHoverItem(false)}  
    >
      {(selectedEditTaskId === task.id)
        ?<EditTask task={task} setSelectedEditTaskId={setSelectedEditTaskId}/>
        :<>
          <div className={css.taskItem_content}>
            <div 
              className={classNames(iconCss.asideBar_itemIcon, iconCss['icon_x-large'])}
              onMouseEnter={() => setIsHoverCheckBox(true)}
              onMouseLeave={() => setIsHoverCheckBox(false)}
            >
              {isHoverCheckBox ? <BsCheckCircle/> : <BsCircle/>}
            </div>
            <div>
              <div className={classNames(css.taskItem_caption)}>{task.caption}</div>
              <div className={classNames(css.taskItem_description)}>{task.description}</div>
            </div>              
          </div>
          <div className={css.taskItem_content}>
            {isHoverItem && 
              <>
                <IconButton
                  onClick={() => setSelectedEditTaskId(task.id)}
                >
                  <AiOutlineEdit/>
                </IconButton>
                <IconButton
                  onClick={() => {}}
                >
                  <BsChatText/>
                </IconButton>
                <IconButton
                  onClick={() => setIsOpenSettingTaskId(task.id)}
                >
                  <AiOutlineEllipsis/>
                </IconButton>
              </>
            }
          </div>
        </>
      }
      
    </div>
  )
})