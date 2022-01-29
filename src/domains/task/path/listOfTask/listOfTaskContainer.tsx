import { FC, useEffect, useState } from "react";
import { ListOfTask } from ".";
import { useAppDispatch } from "../../../../app/hooks";
import { Loader } from "../../../../components/loader";
import { fetchListOfTaskByTaskListId } from "../../state";

export type ListOfTaskContainerPropsType = {
  taskListId: number;
}

export const ListOfTaskContainer: FC<ListOfTaskContainerPropsType> = (props) => {
  const { taskListId } = props;

  const dispatch = useAppDispatch();
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    dispatch(fetchListOfTaskByTaskListId(taskListId))
      .then(() => setIsLoaded(true))
  }, [taskListId])

  if(!isLoaded) return <Loader/>

  return(
    <ListOfTask
      taskListId={taskListId}
    />
  )
}