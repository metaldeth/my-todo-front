import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../app/api";
import { CreateTaskDTO, EditTaskDTO, TaskDTO } from "../../../../types/serverInterface/task/taskDTO";
import {mocks} from "../../../../app/mocks";

export type CreateTaskRes = { taskListId: number, data: CreateTaskDTO };
export type EditTaskRes = { taskId: number, taskListId: number, data: EditTaskDTO };

export const fetchListOfTaskByTaskListId = createAsyncThunk<
  { list: TaskDTO[], taskListId: number },
  number
>('/task', async (taskListId) => {
  const list = await mocks.task.fetchListOfTaskByTaskListId(taskListId);
  return { list, taskListId }
})

export const fetchListOfCompletedTaskByTaskListId = createAsyncThunk<
  { list: TaskDTO[], taskListId: number },
  number
>('/task/isComplete', async (taskListId) => {
  const list = await mocks.task.fetchListOfCompletedTaskByTaskListId(taskListId);
  return { list, taskListId }
})

export const createTask = createAsyncThunk<
  {data: TaskDTO, taskListId: number},
  CreateTaskRes
>('task/create', async (payload: CreateTaskRes) => {
  const data = await mocks.task.create(payload.data, payload.taskListId);
  return {data, taskListId: payload.taskListId}
})

export const editTask = createAsyncThunk<
  { data: TaskDTO, taskListId: number },
  EditTaskRes
>('task/edit', async ({ taskId, taskListId, data }) => {
  const task = await mocks.task.edit(data, taskId, taskListId);
  return { data: task, taskListId }
})

export const removeTask = createAsyncThunk<
  { taskListId: number, taskId: number },
  { taskListId: number, taskId: number }
>('task/remove', async ({ taskListId, taskId }) => {
  await mocks.task.remove(taskListId, taskId)
  return { taskListId, taskId }
})