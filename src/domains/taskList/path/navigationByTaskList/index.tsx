import { FC } from "react";
import { AppBar } from "../../../../components/appBar";
import { AppBarButton } from "../../../../components/appBar/button";

export const NavigationTaskList: FC<{}> = () => {
  return(
    <AppBar>
      <AppBarButton
        link="/taskList/list"
        children='listOfTaskList'
      />
      <AppBarButton
        link="/taskList/create"
        children='createTaskList'
      />
    </AppBar>
  )
}