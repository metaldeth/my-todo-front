import { createAsyncThunk } from "@reduxjs/toolkit";
import { number } from "yup/lib/locale";
import { api } from "../../../../app/api";
import { CreateTaskDTO, EditTaskDTO, TaskDTO } from "../../../../types/serverInterface/task/taskDTO";

export type CreateTaskRes = { taskListId: number, data: CreateTaskDTO };
export type EditTaskRes = { taskId: number, taskListId: number, data: EditTaskDTO };

export const fetchListOfTaskByTaskListId = createAsyncThunk<
  { list: TaskDTO[], taskListId: number },
  number
>('/task', async (taskListId) => {
  const list = await api.task.fetchListOfTaskByTaskListId(taskListId);
  return { list, taskListId }
})

export const fetchListOfCompletedTaskByTaskListId = createAsyncThunk<
  { list: TaskDTO[], taskListId: number },
  number
>('/task/isComplete', async (taskListId) => {
  const list = await api.task.fetchListOfCompletedTaskByTaskListId(taskListId);
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
  { data: TaskDTO, taskListId: number },
  EditTaskRes
>('task/edit', async ({ taskId, taskListId, data }) => {
  const task = await api.task.edit(data, taskId, taskListId);
  return { data: task, taskListId }
})

export const removeOneTask = createAsyncThunk<
  { taskListId: number, taskId: number },
  { taskListId: number, taskId: number }
>('task/removeOne', async ({ taskListId, taskId }) => {
  await api.task.removeOne(taskListId, taskId)
  return { taskListId, taskId }
})

export const removeTask = createAsyncThunk<
  { taskListId: number, taskId: number },
  { taskListId: number, taskId: number }
>('taskList/remove', async ({ taskListId, taskId }) => {
  await api.task.remove(taskId)
  return { taskListId, taskId }
})