import { FC, memo, useState } from "react";
import { TaskDTO } from "../../../../../../types/serverInterface/task/taskDTO";
import { BsChatText } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineEllipsis } from "react-icons/ai";
import css from './styles.module.scss';
import classNames from 'classnames';
import { IconButton } from "../../../../../../components/appBar";
import { EditTask } from "../../editTask";
import { CompletedTask } from "./completedTask";
import { Modal } from "../../../../../../components/modal";
import { SettingTask } from "../../settingTask";
import { TaskModal } from "../../taskModal";

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
      {isEdit && 
        <EditTask task={task} onCLoseEdit={() => setIsEdit(false)} selectedTaskListId={selectedTaskListId}/>
      }
      {!isEdit && //TODO: попробовать улучшить прозрачность кода
        <>
          <div className={css.taskItem_content}>
            <CompletedTask
              task={task}
              selectedTaskListId={selectedTaskListId}
            />
            <div>
              <div className={css.taskItem_caption}>{task.caption}</div>
              <div className={css.taskItem_description}>{task.description}</div>
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
          onCloseSetting={() => setIsOpenSetting(false)}
          taskId={task.id}
        />
      </Modal>
      <Modal
        isOpen={isOpenTaskModal}
        onClose={() => {}}
      >
        <TaskModal
          task={task}
          onCLoseModal={() => setIsOpenTaskModal(false)}
        />
      </Modal>
    </div>
  )
})