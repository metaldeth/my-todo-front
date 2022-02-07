import { memo, useMemo, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useAppSelector } from "../../../../app/hooks";
import { IconButton } from "../../../../components/appBar";
import { selectListOfTaskList, selectTaskListId } from "../../state/taskList";
import { Modal } from "../../../../components/modal";
import { CreateTaskList } from "./createTaskList";
import css from './styles.module.scss'
import { ViewList } from "./viewList";

export const Aside = memo(() => {
  const [ isCreateTaskList, setIsCreateTaskList ] = useState(false);
  const selectedTaskListId = useAppSelector(selectTaskListId);

  const listOfTaskList = useAppSelector(selectListOfTaskList);
  const listOfFaviriteTaskList = useMemo(
    () => listOfTaskList.filter(taskList => taskList.isFavorite),
    [listOfTaskList]
  )
  return(
    <aside className={css.assideBar}>
      <ViewList
        caption="Избранные проекты"
        list={listOfFaviriteTaskList}
        selectedTaskListId={selectedTaskListId}
      />
      <ViewList
        caption="Список проектов"
        list={listOfTaskList}
        selectedTaskListId={selectedTaskListId}
        renderHeaderSlot={() => (
          <IconButton
            className={css.assideBar_createIcon}
            onClick={() => setIsCreateTaskList(true)}
          >
            <AiOutlinePlus/>
          </IconButton>
        )}
      />
      <Modal
        isOpen={isCreateTaskList}
      >
        <CreateTaskList setIsCreateTaskList={setIsCreateTaskList}/>
      </Modal>
    </aside>
  )
})