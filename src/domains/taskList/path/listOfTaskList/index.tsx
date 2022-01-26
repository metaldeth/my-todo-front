import { FC } from "react";
import { useAppSelector } from "../../../../app/hooks";
import { ButtonGroup } from "../../../../components/button/buttonGroup";
import { ButtonLink } from "../../../../components/button/buttonLink";
import { List } from "../../../../components/list";
import { ListItem } from "../../../../components/list/listItem";
import { selectListOfTaskList } from "../../state";

export const ListOfTaskList: FC<{}> = () => {
  const listOfTaskList = useAppSelector(selectListOfTaskList);

  return(
    <List>
      {listOfTaskList.map(taskList => {
        return(
          <ListItem key={`taskListId:${taskList.id}`}>
            <h4>{taskList.caption}</h4>
            <ButtonGroup>
              <ButtonLink
                key={`cardButton_taskListId:${taskList.id}`}
                label='card'
                url={`/taskList/${taskList.id}/card`}
              />
              <ButtonLink
                key={`editButton_taskListId:${taskList.id}`}
                label='edit'
                url={`/taskList/${taskList.id}/edit`}
              />
              <ButtonLink
                key={`removeButton_taskListId:${taskList.id}`}
                label='remove'
                url={`/taskList/${taskList.id}/remove`}
              />
            </ButtonGroup>
          </ListItem>
        )
      })}
    </List>
  )
}