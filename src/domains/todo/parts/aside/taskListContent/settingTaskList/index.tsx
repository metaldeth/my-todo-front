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
          <AiOutlineDelete/>
          <span className={css.settingTaskList_caption}>Удалить список</span> 
        </div>
        <div 
          className={css.settingTaskList_item} 
          onClick={() => onOpenEdit()}
        >
          <AiOutlineEdit/> 
          <span className={css.settingTaskList_caption}>Редактировать список</span>
        </div>
        <div 
          className={css.settingTaskList_item} 
          onClick={onToggleCompleteTaskShow}
        >
          {isShowCompletedTask &&
            <><BsCircle/> <span className={css.settingTaskList_caption}>Скрыть выполненые задачи</span></>
          }
          {!isShowCompletedTask &&
            <><BsCheckCircle/> <span className={css.settingTaskList_caption}>Показать выполненые задачи</span></>
          }
        </div>
      </div>
    </div>
  )
}