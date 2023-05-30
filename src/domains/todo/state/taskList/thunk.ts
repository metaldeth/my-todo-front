import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../app/api";
import { CreateTaskListDTO, EditTaskListDTO, TaskListDTO } from "../../../../types/serverInterface/task/taskListDTO";
import {mocks} from "../../../../app/mocks";

export type EditTaskListRes = { taskListid: number, data: EditTaskListDTO }

export const fetchListOfTaskList = createAsyncThunk<
  TaskListDTO[]
>('/taskList', async () => {
  return await mocks.taskList.fetchListOfTaskList();
})

export const createTaskList = createAsyncThunk<
  TaskListDTO,
  CreateTaskListDTO
>('taskList/create', async (payload: CreateTaskListDTO) => {
  return mocks.taskList.create(payload);
})

export const editTaskList = createAsyncThunk<
  TaskListDTO,
  EditTaskListRes
>('taskList/edit', async (payload: EditTaskListRes) => {
  return mocks.taskList.edit(payload.data, payload.taskListid);
})

export const removeTaskList = createAsyncThunk<
  number,
  number
>('taskList/remove', async (taskListId: number) => {
  await mocks.taskList.remove(taskListId)
  return taskListId
})