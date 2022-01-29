import { FC } from "react";
import { useAppSelector } from "../../../../app/hooks";
import { ButtonGroup } from "../../../../components/button/buttonGroup";
import { ButtonLink } from "../../../../components/button/buttonLink";
import { List } from "../../../../components/list";
import { ListItem } from "../../../../components/list/listItem";
import { selectListOfTaskByTaskListId } from "../../state";

export type ListOfTaskPropsType = {
  taskListId: number;
}

export const ListOfTask: FC<ListOfTaskPropsType> = (props) => {
  const { taskListId } = props;

  const listOfTask = useAppSelector(selectListOfTaskByTaskListId(taskListId))
  return(
    <List>
      {listOfTask.map(task => {
        return(
          <ListItem key={`taskListId:${task.id}`}>
            <h4>{task.caption}</h4>
            <h5>{task.description}</h5>
            <ButtonGroup>
              <ButtonLink
                key={`cardButton_taskId:${task.id}`}
                label='card'
                url={`/taskList/${taskListId}/task/${task.id}/card`}
              />
              <ButtonLink
                key={`editButton_taskId:${task.id}`}
                label='edit'
                url={`/taskList/${taskListId}/task/${task.id}/edit`}
              />
              <ButtonLink
                key={`removeButton_taskId:${task.id}`}
                label='remove'
                url={`/taskList/${taskListId}/task/${task.id}/remove`}
              />
            </ButtonGroup>
          </ListItem>
        )
      })}
    </List>
  )
}