import classNames from "classnames";
import { FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppDispatch } from "../../../../app/hooks";
import { removeTaskList } from "../../state/taskList";
import css from './styles.module.scss';

export type AsideSettingTaskListPropsType = {
  setIsAsideSettingTaskList: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTaskListId: number | null;
  setSelectedTaskListId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const AsideSettingTaskList: FC<AsideSettingTaskListPropsType> = ({ 
  setIsAsideSettingTaskList,
  selectedTaskListId,
  setSelectedTaskListId
}) => {
  const dispatch = useAppDispatch();

  const remove = () => {
    if(!selectedTaskListId) return;
    dispatch(removeTaskList(selectedTaskListId))
      .then(() => {
        setSelectedTaskListId(null);
        setIsAsideSettingTaskList(false);
      });
  };

  return (
    <div className={css.settingTaskList_modal} onClick={() => setIsAsideSettingTaskList(false)}>
      <div className={classNames(css.settingTaskList_box, css.asideSettingTaskList_boxPosition)}>
        <div 
          className={css.settingTaskList_item} 
          onClick={remove}
        >
          <div>
            <AiOutlineDelete/> Удалить список
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