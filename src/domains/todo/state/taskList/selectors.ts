import { RootState } from "../../../../app/store";

export const selectTaskListById = (taskListId: number) => (state: RootState) => {
  return state.taskList.map[taskListId];
}

export const selectListOfTaskList = (state: RootState) => {
  const { map, list } = state.taskList;
  return list.map(id => map[id]);
}