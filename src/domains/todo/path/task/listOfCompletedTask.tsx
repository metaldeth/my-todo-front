import { FC } from "react";
import { TaskItem } from ".";
import { useAppSelector } from "../../../../app/hooks";
import { selectListOfCompletedTaskByTaskListId } from "../../state/task";

export type ListOfCompletedTaskPropsType = {
  selectedTaskListId: number;
}

export const ListOfCompletedTask: FC<ListOfCompletedTaskPropsType> = ({
  selectedTaskListId,
}) => {
  const listOfTask = useAppSelector(selectListOfCompletedTaskByTaskListId(selectedTaskListId));

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
}