import { memo, useMemo, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useAppSelector } from "../../../../app/hooks";
import { IconButton } from "../../../../components/appBar";
import { selectListOfTaskList } from "../../state/taskList";
import { Modal } from "../../../../components/modal";
import { CreateTaskList } from "./createTaskList";
import css from './styles.module.scss'
import { ViewList } from "./viewList/viewList";
import { Route, Routes, useParams } from "react-router";
import { RouteTaskListParam } from "./types";
import { ViewListContainer, ViewListContainerBySelectTaskList } from "./viewList";

export const Asside = memo<{}>(() => {
  const [ isCreateTaskList, setIsCreateTaskList ] = useState(false);

  const listOfTaskList = useAppSelector(selectListOfTaskList);
  const listOfFaviriteTaskList = useMemo(
    () => listOfTaskList.filter(taskList => taskList.isFavorite),
    [listOfTaskList]
  )
  return(
    <aside className={css.assideBar}>
      <Routes>
        <Route path='/taskList/:taskListId/*' element={
          <>
            <ViewListContainerBySelectTaskList
              caption="Избранные проекты"
              list={listOfFaviriteTaskList}
            />
            <ViewListContainerBySelectTaskList
              caption="Список проектов"
              list={listOfTaskList}
            />
          </>
        }/>
        <Route path='/*' element={
          <>
            <ViewListContainer
              caption="Избранные проекты"
              list={listOfFaviriteTaskList}
            />
            <ViewListContainer
              caption="Список проектов"
              list={listOfTaskList}
            />
          </>
        }/>
      </Routes>
      <div>
        <IconButton onClick={() => setIsCreateTaskList(true)}>
          <AiOutlinePlus/>
        </IconButton>
      </div>
      <Modal
        isOpen={isCreateTaskList}
      >
        <CreateTaskList setIsCreateTaskList={setIsCreateTaskList}/>
      </Modal>
    </aside>
  )
})