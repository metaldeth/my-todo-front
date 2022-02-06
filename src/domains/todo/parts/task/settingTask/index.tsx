import { memo } from "react";
import css from './styles.module.scss';
import { useAppDispatch } from "../../../../../app/hooks";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import classNames from "classnames";
import { removeOneTask, removeTask } from "../../../state/task";

export type SettingTaskPropsType = {
  selectedTaskListId: number;
  taskId: number;
  onCloseSetting: VoidFunction;
}

export const SettingTask = memo<SettingTaskPropsType>(({ 
  selectedTaskListId,
  taskId,
  onCloseSetting,
}) => {
  const dispatch = useAppDispatch();

  const removeOne = () => {
    if(!selectedTaskListId) return;
    onCloseSetting();
    dispatch(removeOneTask({taskListId: selectedTaskListId, taskId }))
      .then(() => {
        // setIsLoaded(false);TODO:что тут разместить?
      });
  };

  const remove = () => {
    if(!selectedTaskListId) return;
    onCloseSetting();
    dispatch(removeTask({taskListId: selectedTaskListId, taskId}))
      .then(() => {
        // setIsLoaded(false);TODO:что тут разместить?
      });
  };

  return (
    <div className={css.settingTask_modal} onClick={() => onCloseSetting()}>
      <div className={classNames(css.settingTask_box, css.settingTask_boxPosition)}>
        <div 
          className={css.settingTask_item} 
          onClick={removeOne}
        >
          <div>
            <AiOutlineDelete/> Удалить задачу
          </div>
        </div>
        <div 
          className={css.settingTask_item} 
          onClick={remove}
        >
          <div>
            <AiOutlineDelete/> Удалить везде
          </div>
        </div>
        <div className={css.settingTask_item}>
          <div>
            Отмена
          </div>
        </div>
      </div>
    </div>
  )
})