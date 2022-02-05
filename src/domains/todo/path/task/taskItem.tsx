import { FC, memo, useState } from "react";
import { TaskDTO } from "../../../../types/serverInterface/task/taskDTO";
import { BsChatText } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineEllipsis } from "react-icons/ai";
import css from './styles.module.scss';
import classNames from 'classnames';
import { IconButton } from "../../../../components/appBar";
import { EditTask } from "./editTask";
import { CompletedTask } from "./completedTask";
import { Modal } from "../modal";
import { SettingTask } from "./settingTask";
import { TaskModal } from "./taskModal";

export type TaskItemPropsType = {
  task: TaskDTO,
  selectedTaskListId: number;
}

export const TaskItem: FC<TaskItemPropsType> = memo(({ 
  task,
  selectedTaskListId,
 }) => {
  const [ isHoverItem, setIsHoverItem ] = useState(false);
  const [ isOpenSetting, setIsOpenSetting ] = useState(false);
  const [ isEdit, setIsEdit ] = useState(false);
  const [ isOpenTaskModal, setIsOpenTaskModal ] = useState(false);

  return(
    <div 
      className={classNames(css.taskItem)}
      onMouseEnter={() => setIsHoverItem(true)}
      onMouseLeave={() => setIsHoverItem(false)}  
    >
      {isEdit
        ?<EditTask task={task} setIsEdit={setIsEdit} selectedTaskListId={selectedTaskListId}/>
        :<>
          <div className={css.taskItem_content}>
            <CompletedTask
              task={task}
              selectedTaskListId={selectedTaskListId}
            />
            <div>
              <div className={classNames(css.taskItem_caption)}>{task.caption}</div>
              <div className={classNames(css.taskItem_description)}>{task.description}</div>
            </div>              
          </div>
          <div className={css.taskItem_content}>
            {isHoverItem && 
              <>
                <IconButton
                  onClick={() => setIsEdit(true)}
                >
                  <AiOutlineEdit/>
                </IconButton>
                <IconButton
                  onClick={() => setIsOpenTaskModal(true)}
                >
                  <BsChatText/>
                </IconButton>
                <IconButton
                  onClick={() => setIsOpenSetting(!isOpenSetting)}
                >
                  <AiOutlineEllipsis/>
                </IconButton>
              </>
            }
          </div>
        </>
      }
      
      <Modal
        isOpen={isOpenSetting}
        onClose={() => {}}
      >
        <SettingTask
          selectedTaskListId={selectedTaskListId}
          setIsOpenSetting={setIsOpenSetting}
          taskId={task.id}
        />
      </Modal>
      <Modal
        isOpen={isOpenTaskModal}
        onClose={() => {}}
      >
        <TaskModal
          task={task}
          setIsOpenTaskModal={setIsOpenTaskModal}
        />
      </Modal>
    </div>
  )
})