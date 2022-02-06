import classNames from "classnames";
import { FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppDispatch } from "../../../../../../app/hooks";
import { removeTaskList } from "../../../../state/taskList";
import css from './styles.module.scss';

export type AsideSettingTaskListPropsType = {
  selectedTaskListId: number | null;
  onSelectTaskListId: (taskListId:  number | null) => void;
  onClose: VoidFunction;
}

export const AsideSettingTaskList: FC<AsideSettingTaskListPropsType> = ({ 
  onSelectTaskListId,
  selectedTaskListId,
  onClose
}) => {
  const dispatch = useAppDispatch();

  const remove = () => {
    if(!selectedTaskListId) return;
    dispatch(removeTaskList(selectedTaskListId))
      .then(() => {
        onSelectTaskListId(null);
        onClose();
      });
  };

  return (
    <div className={css.settingTaskList_modal} onClick={() => onClose()}>
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