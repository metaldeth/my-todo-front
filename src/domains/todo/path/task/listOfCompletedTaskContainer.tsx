import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { Loader } from "../../../../components/loader";
import { fetchListOfCompletedTaskByTaskListId } from "../../state/task";
import { ListOfCompletedTask } from "./listOfCompletedTask";

export type ListOfCompletedTaskContainerPropsType = {
  selectedTaskListId: number;
}

export const ListOfCompletedTaskContainer: FC<ListOfCompletedTaskContainerPropsType> = ({
  selectedTaskListId,
}) => {
  const dispatch = useAppDispatch();

  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    dispatch(fetchListOfCompletedTaskByTaskListId(selectedTaskListId))
      .then(() => setIsLoaded(true));
  }, [dispatch, selectedTaskListId]);

  if(!isLoaded) return <Loader/>;

  return(
    <ListOfCompletedTask
      selectedTaskListId={selectedTaskListId}
    />
  )
}