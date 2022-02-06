import { FC } from "react";
import css from './styles.module.scss';
import { useAppDispatch } from "../../../../../app/hooks";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import classNames from "classnames";
import { removeOneTask, removeTask } from "../../../state/task";

export type SettingTaskPropsType = {
  onCloseSetting: VoidFunction;
  selectedTaskListId: number;
  taskId: number;
}

export const SettingTask: FC<SettingTaskPropsType> = ({ 
  onCloseSetting,
  selectedTaskListId,
  taskId,
}) => {
  const dispatch = useAppDispatch();

  const removeOne = () => {
    if(!selectedTaskListId) return;
    onCloseSetting();
    dispatch(removeOneTask({taskListId: selectedTaskListId, taskId }))
      .then(() => {
        // setIsLoaded(false);
      });
  };

  const remove = () => {
    if(!selectedTaskListId) return;
    onCloseSetting();
    dispatch(removeTask({taskListId: selectedTaskListId, taskId}))
      .then(() => {
        // setIsLoaded(false);
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
}