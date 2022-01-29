import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../app/api";
import { CreateTaskDTO, EditTaskDTO, TaskDTO } from "../../../types/serverInterface/task/taskDTO";

export type CreateTaskRes = { taskListId: number, data: CreateTaskDTO };
export type EditTaskRes = { taskId: number, data: EditTaskDTO };

export const fetchListOfTaskByTaskListId = createAsyncThunk<
  { list: TaskDTO[], taskListId: number },
  number
>('/task', async (taskListId) => {
  const list = await api.task.fetchListOfTaskByTaskListId(taskListId);
  return { list, taskListId }
})

export const createTask = createAsyncThunk<
  {data: TaskDTO, taskListId: number},
  CreateTaskRes
>('task/create', async (payload: CreateTaskRes) => {
  const data = await api.task.create(payload.data, payload.taskListId);
  return {data, taskListId: payload.taskListId}
})

export const editTask = createAsyncThunk<
  TaskDTO,
  EditTaskRes
>('task/edit', async (payload: EditTaskRes) => {
  return api.task.edit(payload.data, payload.taskId);
})

export const removeTask = createAsyncThunk<
  number,
  number
>('taskList/remove', async (taskId: number) => {
  await api.task.remove(taskId)
  return taskId
})