import { memo, useState } from "react";
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
import { Route, Routes, useNavigate } from "react-router";

export type TaskItemPropsType = {
  task: TaskDTO,
  selectedTaskListId: number;
}

export const TaskItem = memo<TaskItemPropsType>(({ 
  task,
  selectedTaskListId,
 }) => {
  const [ isHoverItem, setIsHoverItem ] = useState(false);
  const [ isOpenSetting, setIsOpenSetting ] = useState(false);
  const [ isEdit, setIsEdit ] = useState(false);

  const navigate = useNavigate();

  const onOpenTaskModal = () => navigate(`/taskList/:${selectedTaskListId}/task/${task.id}`);

  return(
    <div 
      className={css.taskItem}
      onMouseEnter={() => setIsHoverItem(true)}
      onMouseLeave={() => setIsHoverItem(false)}  
    >
      {isEdit && 
        <EditTask task={task} onCLoseEdit={() => setIsEdit(false)} selectedTaskListId={selectedTaskListId}/>
      }
      {/* TODO: попробовать улучшить прозрачность кода */}
      {!isEdit && 
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
                  onClick={() => onOpenTaskModal()}
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
      >
        <SettingTask
          selectedTaskListId={selectedTaskListId}
          onCloseSetting={() => setIsOpenSetting(false)}
          taskId={task.id}
        />
      </Modal>
      
      <Routes>
        <Route path='/taskList/:taskListId/task/:taskId' element={
          <Modal
            isOpen={true}
          >
            <TaskModal/>
          </Modal>
        }/>
      </Routes>
    </div>
  )
})