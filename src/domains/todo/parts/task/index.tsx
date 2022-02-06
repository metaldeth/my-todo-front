import { memo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { Loader } from "../../../../components/loader";
import { fetchListOfTaskByTaskListId, selectListOfTaskByTaskListId } from "../../state/task";
import { ListOfCompletedTaskContainer } from "./listOfTask/listOfCompleteTask";
import { ListOfTask } from "./listOfTask";

export type TaskContainerPropsType = {
  selectedTaskListId: number;
  isShowCompletedTask: boolean;
}

export const TaskContainer = memo<TaskContainerPropsType>(({ 
  selectedTaskListId, 
  isShowCompletedTask,
}) => {
  const dispatch = useAppDispatch();

  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    dispatch(fetchListOfTaskByTaskListId(selectedTaskListId))
      .then(() => setIsLoaded(true))
  }, [dispatch, selectedTaskListId]);

  const listOfTask = useAppSelector(selectListOfTaskByTaskListId)

  if(!isLoaded) return <Loader/>

  return(
    <>
      <ListOfTask
        selectedTaskListId={selectedTaskListId}
        listOfTask={listOfTask}
      />
      {(isShowCompletedTask && !!selectedTaskListId) && (
        <ListOfCompletedTaskContainer
          selectedTaskListId={selectedTaskListId}
        />
      )}
    </>
  )
})