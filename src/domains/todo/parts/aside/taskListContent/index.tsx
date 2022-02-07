import { memo, useState } from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../../../../app/hooks";
import { Modal } from "../../../../../components/modal";
import { selectTaskListById, selectTaskListId } from "../../../state/taskList";
import { TaskContainer } from "../../task";
import { SettingTaskList } from "./settingTaskList";
import { RouteTaskListParam } from "../../../../../types/routeTypes/types";
import { TaskListHeader } from "./taskListHeader";
import css from './styles.module.scss'

export const TaskListContent = memo(() => {
  const { taskListId } = useParams<RouteTaskListParam>();
  const convertedId = Number(taskListId);

  const taskList = useAppSelector(selectTaskListById(convertedId));

  const [ isOpenSetting, setIsOpenSetting ] = useState(false);
  const [ isOpenEdit, setIsOpenEdit ] = useState(false);
  const [ isShowCompletedTask, setIsShowCompletedTask ] = useState(false);

  const openEditBySetting = () => {
    setIsOpenEdit(true);
    setIsOpenSetting(false);
  }

  if(!taskList) return <h1>not found 404</h1>

  return(
    <div className={css.taskListCard}>
      <TaskListHeader
        taskList={taskList}
        isOpenEdit={isOpenEdit}
        onOpenStatusEdit={setIsOpenEdit}
        onOpenSetting={() => setIsOpenSetting(true)}
      />
      <TaskContainer
        selectedTaskListId={taskList.id}
        isShowCompletedTask={isShowCompletedTask}
      />
      <Modal isOpen={isOpenSetting} >
        <SettingTaskList 
          isShowCompletedTask={isShowCompletedTask}
          selectedTaskListId={taskList.id}
          onToggleCompleteTaskShow={() => setIsShowCompletedTask(!isShowCompletedTask)}
          onClose={() => setIsOpenSetting(false)}
          onOpenEdit={openEditBySetting}
        />
      </Modal>
    </div>
  )
})