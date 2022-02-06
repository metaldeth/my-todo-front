import { memo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppSelector } from "../../../../../app/hooks";
import { Modal } from "../../../../../components/modal";
import { selectTaskListById } from "../../../state/taskList";
import { TaskContainer } from "../../task";
import { SettingTaskList } from "../settingTaskList";
import { RouteTaskListParam } from "../types";
import css from './styles.module.scss'
import { TaskListHeader } from "./taskListHeader";

export const TaskListCard = memo<{}>(() => {
  const { taskListId } = useParams<RouteTaskListParam>();
  const convertedId = Number(taskListId);

  const navigate = useNavigate();

  const taskList = useAppSelector(selectTaskListById(convertedId));

  const [ isOpenSettingTaskList, onIsOpenSettingTaskList ] = useState(false);
  const [ isOpenEditTaskList, onIsOpenEditTaskList ] = useState(false);
  const [ isShowCompletedTask, onIsShowCompletedTask ] = useState(false);

  const onClearSelectedTaskListId = () => {
    navigate('/')
  }

  return(
    <div className={css.taskListCard}>
      <TaskListHeader
        taskList={taskList}
        isOpenEditTaskList={isOpenEditTaskList}
        onCloseEdit={() => onIsOpenEditTaskList(false)}
        onOpenEdit={() => onIsOpenEditTaskList(true)}
        onOpenSettingTaskList={() => onIsOpenSettingTaskList(true)}
      />
      <TaskContainer
        selectedTaskListId={taskList.id}
        isShowCompletedTask={isShowCompletedTask}
      />
      <Modal
        isOpen={isOpenSettingTaskList}
        onClose={() => {}}
      >
        <SettingTaskList //TODO: Уменьшение количества пропсов
          isShowCompletedTask={isShowCompletedTask}
          selectedTaskListId={taskList.id}
          onClearSelectedTaskListId={onClearSelectedTaskListId}
          onCloseEditTaskList={() => onIsOpenEditTaskList(false)}
          onOpenEditTaskList={() => onIsOpenEditTaskList(true)}
          onCloseSettingTaskList={() => onIsOpenSettingTaskList(false)}
          onIsShowCompleteTask={() => onIsShowCompletedTask(!isShowCompletedTask)}
        />
      </Modal>
    </div>
  )
})