import { RootState } from "../../../../app/store";

export const selectListOfTaskByTaskListId = (state: RootState) => {
  const { list, map } = state.task;
  return list.map(taskId => map[taskId]);
}

export const selectListOfCompletedTaskByTaskListId = (state: RootState) => {
  const { list, map } = state.task;
  return list.map(taskId => map[taskId]);
}

export const selectTaskById = (taskId: number) => (state: RootState) => {
  return state.task.map[taskId];
}