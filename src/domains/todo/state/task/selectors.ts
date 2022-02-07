import { RootState } from "../../../../app/store";

export const selectListOfUncompletedTask = (state: RootState) => {
  const { list, map } = state.task;
  return list.map(taskId => map[taskId]).filter(task => !task.isComplete);
}

export const selectListOfCompletedTask = (state: RootState) => {
  const { list, map } = state.task;
  return list.map(taskId => map[taskId]).filter(task => task.isComplete);
}

export const selectTaskById = (taskId: number) => (state: RootState) => {
  return state.task.map[taskId];
}