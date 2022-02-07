import { FC } from "react";
import css from './styles.module.scss';
import { useAppDispatch } from "../../../../../../app/hooks";
import { removeTaskList } from "../../../../state/taskList";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import classNames from "classnames";
import { useNavigate } from "react-router";

export type SettingTaskListPropsType = {
  isShowCompletedTask: boolean;
  selectedTaskListId: number | null;
  onToggleCompleteTaskShow: VoidFunction;
  onClose: VoidFunction;
  onOpenEdit: VoidFunction;
}

export const SettingTaskList: FC<SettingTaskListPropsType> = ({ 
  selectedTaskListId,
  isShowCompletedTask,
  onToggleCompleteTaskShow,
  onClose,
  onOpenEdit
}) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const remove = () => {
    if(!selectedTaskListId) return;
    onClose();
    dispatch(removeTaskList(selectedTaskListId))
      .then(() => {
        navigate('/');
      });
  };

  return (
    <div className={css.settingTaskList_modal} onClick={() => onClose()}>
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
          onClick={() => onOpenEdit()}
        >
          <div>
            <AiOutlineEdit/> Редактировать список
          </div>
        </div>
        <div 
          className={css.settingTaskList_item} 
          onClick={onToggleCompleteTaskShow}
        >
          <div>
            {isShowCompletedTask 
              ? <><BsCircle/> Скрыть выполненые задачи</>
              : <><BsCheckCircle/> Показать выполненые задачи</>
            }
          </div>
        </div>
      </div>
    </div>
  )
}