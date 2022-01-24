import { FC } from "react";
import { useAppSelector } from "../../../../app/hooks";
import { selectListOfTaskList } from "../../state";

export const ListOfTaskList: FC<{}> = () => {
  const listOfTaskList = useAppSelector(selectListOfTaskList);

  return(
    <>
      {listOfTaskList.map(taskList => {
        return(
          <h4>{taskList.caption}</h4>
        )
      })}
    </>
  )
}