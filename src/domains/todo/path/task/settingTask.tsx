import { FC } from "react";
import css from './styles.module.scss';
import { useAppDispatch } from "../../../../app/hooks";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import classNames from "classnames";
import { removeOneTask, removeTask } from "../../state/task";

export type SettingTaskPropsType = {
  setSelectedOpenSettingTaskId:React.Dispatch<React.SetStateAction<number | null>>;
  selectedTaskListId: number | null;
  selectedSettingTaskId: number | null;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedEditTaskId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const SettingTask: FC<SettingTaskPropsType> = ({ 
  setSelectedOpenSettingTaskId,
  selectedTaskListId,
  setIsLoaded,
  selectedSettingTaskId,
  setSelectedEditTaskId,
}) => {
  const dispatch = useAppDispatch();

  const removeOne = () => {
    if(!selectedTaskListId || !selectedSettingTaskId) return;
    setSelectedOpenSettingTaskId(null);
    dispatch(removeOneTask({taskListId: selectedTaskListId, taskId: selectedSettingTaskId}))
      .then(() => {
        setIsLoaded(false);
      });
  };

  const remove = () => {
    if(!selectedTaskListId || !selectedSettingTaskId) return;
    setSelectedOpenSettingTaskId(null);
    dispatch(removeTask({taskListId: selectedTaskListId, taskId: selectedSettingTaskId}))
      .then(() => {
        setIsLoaded(false);
      });
  };

  return (
    <div className={css.settingTask_modal} onClick={() => setSelectedOpenSettingTaskId(null)}>
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
        <div 
          className={css.settingTask_item} 
          onClick={() => setSelectedEditTaskId(selectedSettingTaskId)}
        >
          <div>
            <AiOutlineEdit/> Редактировать задачу
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