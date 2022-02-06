import { FC, memo, useEffect, useState } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { Loader } from "../../../../components/loader";
import { fetchListOfTaskByTaskListId } from "../../state/task";
import { ListOfCompletedTaskContainer } from "./listOfTask/listOfCompleteTask";
import { ListOfTask } from "./listOfTask";

export type TaskContainerPropsType = {
  selectedTaskListId: number;
  isShowCompletedTask: boolean;
}

export const TaskContainer: FC<TaskContainerPropsType> = memo(({ 
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

  if(!isLoaded) return <Loader/>

  return(
    <>
      <ListOfTask
        selectedTaskListId={selectedTaskListId}
      />
      {
        (isShowCompletedTask && !!selectedTaskListId) 
        && <ListOfCompletedTaskContainer
          selectedTaskListId={selectedTaskListId}
        />
      }
    </>
  )
})