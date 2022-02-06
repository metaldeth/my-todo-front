import { FC } from "react";
import css from './styles.module.scss';
import { useAppDispatch } from "../../../../../app/hooks";
import { removeTaskList } from "../../../state/taskList";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import classNames from "classnames";

export type SettingTaskListPropsType = {
  isShowCompletedTask: boolean;
  selectedTaskListId: number | null;
  onClearSelectedTaskListId: VoidFunction;
  onCloseSettingTaskList: VoidFunction;
  onIsShowCompleteTask: VoidFunction;
  onOpenEditTaskList: VoidFunction;
  onCloseEditTaskList: VoidFunction;
}

//TODO: Слишком много пропсов

export const SettingTaskList: FC<SettingTaskListPropsType> = ({ 
  selectedTaskListId,
  isShowCompletedTask,
  onClearSelectedTaskListId,
  onCloseSettingTaskList,
  onCloseEditTaskList,
  onOpenEditTaskList,
  onIsShowCompleteTask,
}) => {
  const dispatch = useAppDispatch();

  const remove = () => {
    if(!selectedTaskListId) return;
    onCloseSettingTaskList();
    dispatch(removeTaskList(selectedTaskListId))
      .then(() => {
        onClearSelectedTaskListId();
      });
  };

  return (
    <div className={css.settingTaskList_modal} onClick={() => onCloseEditTaskList()}>
      <div className={classNames(css.settingTaskList_box, css.settingTaskList_boxPosition)}>
        <div 
          className={css.settingTaskList_item} 
          onClick={remove}
        >
          <div>
            <AiOutlineDelete/> Удалить список
          </div>
        </div>
        <div 
          className={css.settingTaskList_item} 
          onClick={() => onOpenEditTaskList()}
        >
          <div>
            <AiOutlineEdit/> Редактировать список
          </div>
        </div>
        <div 
          className={css.settingTaskList_item} 
          onClick={() => onIsShowCompleteTask()}
        >
          <div>
            {isShowCompletedTask 
              ? <><BsCircle/> Скрыть выполненые задачи</>
              : <><BsCheckCircle/> Показать выполненые задачи</>
            }
          </div>
        </div>
        <div className={css.settingTaskList_item}>
          <div>
            Отмена
          </div>
        </div>
      </div>
    </div>
  )
}