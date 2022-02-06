import { memo } from "react";
import { useAppSelector } from "../../../../../../app/hooks";
import { selectListOfCompletedTaskByTaskListId } from "../../../../state/task";
import { TaskItem } from "../taskItem";

export type ListOfCompletedTaskPropsType = {
  selectedTaskListId: number;
}

export const ListOfCompletedTask = memo<ListOfCompletedTaskPropsType>(({
  selectedTaskListId,
}) => {
  const listOfTask = useAppSelector(selectListOfCompletedTaskByTaskListId);

  return(
    <>
      {listOfTask.map(task => 
      <TaskItem
        key={task.id} 
        task={task} 
        selectedTaskListId={selectedTaskListId}
      />)}
    </>
  )
})