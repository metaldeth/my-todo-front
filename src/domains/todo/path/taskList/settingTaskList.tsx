import { FC } from "react";
import css from './styles.module.scss';
import { useAppDispatch } from "../../../../app/hooks";
import { removeTaskList } from "../../state/taskList";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import classNames from "classnames";

export type SettingTaskListPropsType = {
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTaskListId: number | null;
  setSelectedTaskListId: React.Dispatch<React.SetStateAction<number | null>>;
  setIsOpenEditTaskList: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenSettingTaskList: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SettingTaskList: FC<SettingTaskListPropsType> = ({ 
  selectedTaskListId,
  setIsLoaded,
  setSelectedTaskListId,
  setIsOpenEditTaskList,
  setIsOpenSettingTaskList,
}) => {
  const dispatch = useAppDispatch();

  const remove = () => {
    if(!selectedTaskListId) return;
    setSelectedTaskListId(null);
    setIsOpenSettingTaskList(false);
    dispatch(removeTaskList(selectedTaskListId))
      .then(() => {
        setIsLoaded(false);
      });
  };

  return (
    <div className={css.settingTaskList_modal} onClick={() => setIsOpenSettingTaskList(false)}>
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
          onClick={() => setIsOpenEditTaskList(true)}
        >
          <div>
            <AiOutlineEdit/> Редактировать список
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