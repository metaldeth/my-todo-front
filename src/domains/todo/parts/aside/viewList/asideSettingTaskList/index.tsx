import classNames from "classnames";
import { memo } from "react";
import { AiOutlineDelete, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../../../app/hooks";
import { TaskListDTO } from "../../../../../../types/serverInterface/task/taskListDTO";
import { editTaskList, removeTaskList } from "../../../../state/taskList";
import css from './styles.module.scss';

export type AsideSettingTaskListPropsType = {
  taskList: TaskListDTO;
  onSelectTaskList: (taskListId:  number | null) => void;
  onClose: VoidFunction;
}

export const AsideSettingTaskList = memo<AsideSettingTaskListPropsType>(({ 
  taskList,
  onSelectTaskList,
  onClose
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const remove = () => {
    if(!taskList.id) return;
    dispatch(removeTaskList(taskList.id))
      .then(() => {
        onSelectTaskList(null);
        onClose();
        navigate('/')
      });
  };

  const onClickFavorite = () => {
    dispatch(editTaskList({taskListid: taskList.id, data: {
      caption: taskList.caption,
      isFavorite: !taskList.isFavorite,
    }}))
  }

  return (
    <div className={css.settingTaskList_modal} onClick={() => onClose()}>
      <div className={classNames(css.settingTaskList_box, css.asideSettingTaskList_boxPosition)}>
        <div 
          className={css.settingTaskList_item} 
          onClick={onClickFavorite}
        >
          <div>
            {!taskList.isFavorite && 
              <><AiFillStar/> В избранное</>
            }
            {taskList.isFavorite && 
              <><AiOutlineStar/> Убрать из избранное</>
            }
          </div>
        </div>
        <div 
          className={css.settingTaskList_item} 
          onClick={remove}
        >
          <div>
            <AiOutlineDelete/> Удалить список
          </div>
        </div>
      </div>
    </div>
  )
})