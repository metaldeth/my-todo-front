import { RootState } from "../../../../app/store";

export const selectTaskListById = (taskListId: number) => (state: RootState) => {
  return state.taskList.map[taskListId];
}

export const selectListOfTaskList = (state: RootState) => {
  const { map, list } = state.taskList;
  return list.map(id => map[id]);
}

export const selectListOfTaskListByUserId = (userId: number) => (state: RootState) => {
  const { map, listByUserId } = state.taskList;
  return listByUserId[userId].map(id => map[id]);
}

export const selectListOfTaskListByTaskId = (taskId: number) => (state: RootState) => {
  const { map, listByTaskId } = state.taskList;
  return listByTaskId[taskId].map(id => map[id]);
}