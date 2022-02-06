import { memo, useState } from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../../../../app/hooks";
import { Modal } from "../../../../../components/modal";
import { selectTaskListById } from "../../../state/taskList";
import { TaskContainer } from "../../task";
import { SettingTaskList } from "./settingTaskList";
import { RouteTaskListParam } from "../../../../../types/routeTypes/types";
import css from './styles.module.scss'
import { TaskListHeader } from "./taskListHeader";

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