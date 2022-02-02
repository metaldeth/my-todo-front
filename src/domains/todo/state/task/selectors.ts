import { RootState } from "../../../../app/store";

export const selectListOfTaskByTaskListId = (taskListId: number) => (state: RootState) => {
  const { listByTaskListId, map } = state.task;
  return listByTaskListId[taskListId].map(taskId => map[taskId]);
}

export const selectTaskById = (taskId: number) => (state: RootState) => {
  return state.task.map[taskId];
}