import { createSlice } from "@reduxjs/toolkit";
import { TaskDTO } from "../../../../types/serverInterface/task/taskDTO";
import { 
  createTask, 
  editTask, 
  fetchListOfTaskByTaskListId, 
  fetchListOfCompletedTaskByTaskListId,
  removeOneTask,
  removeTask,
} from "./thunk";

export interface TaskState {
  map: Record<number, TaskDTO>;
  taskListId: number | null;
  list: number[];
}

const initialState: TaskState = {
  map: {},
  taskListId: null,
  list: [],
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //TODO: в одну функцию дублирующие reducer

    builder.addCase(fetchListOfTaskByTaskListId.pending, (state, action) => {
      const taskListId = action.meta.arg;

      if(taskListId === state.taskListId) return;

      state.taskListId = taskListId;

      state.map = {};
      state.list = [];
    })

    builder.addCase(fetchListOfCompletedTaskByTaskListId.pending, (state, action) => {
      const taskListId = action.meta.arg;

      if(taskListId === state.taskListId) return;

      state.taskListId = taskListId;

      state.map = {};
      state.list = [];
    })
    

    builder.addCase(fetchListOfTaskByTaskListId.fulfilled, (state, action) => {
      const { list, taskListId } = action.payload;

      if(taskListId !== state.taskListId) return;

      list.forEach(task => {
        state.map[task.id] = task;
        state.list.push(task.id);
      })
    })

    builder.addCase(fetchListOfCompletedTaskByTaskListId.fulfilled, (state, action) => {
      const { list, taskListId } = action.payload;

      if(taskListId !== state.taskListId) return;

      list.forEach(task => {
        state.map[task.id] = task;
        state.list.push(task.id);
      })
    })

    builder.addCase(createTask.fulfilled, (state, action) => {
      const { data, taskListId } = action.payload;
      state.map[data.id] = data;
      state.list.push(data.id);
    })

    builder.addCase(editTask.fulfilled, (state, action) => {
      const { data: task, taskListId } = action.payload;
      state.map[task.id] = task;
    })

    builder.addCase(removeOneTask.fulfilled, (state, action) => {
      const { taskListId, taskId } = action.payload;
    })

    builder.addCase(removeTask.fulfilled, (state, action) => {
      const { taskListId, taskId } = action.payload;

      //todo
    })
  }
})

export const taskReducer = taskSlice.reducer;