import { createSlice } from "@reduxjs/toolkit";
import { TaskDTO } from "../../../../types/serverInterface/task/taskDTO";
import { logOut } from "../../../auth/state/action";
import { 
  createTask, 
  editTask, 
  fetchListOfTaskByTaskListId, 
  fetchListOfCompletedTaskByTaskListId,
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

      if(taskListId === state.taskListId) {
        state.list = state.list.filter(id => {
          const task = state.map[id];
          if (!task.isComplete) return true;
          delete state.map[id];
          return false;
        }) 
        return;
      }

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
      const { data } = action.payload;
      state.map[data.id] = data;
      state.list.push(data.id);
    })

    builder.addCase(editTask.fulfilled, (state, action) => {
      const { data: task } = action.payload;
      state.map[task.id] = task;
    })

    builder.addCase(removeTask.fulfilled, (state, action) => {
      const { taskId } = action.payload;

      const indexOfDelete = state.list.findIndex(id => id === taskId);
      state.list.splice(indexOfDelete, 1);
      delete state.map[taskId];
    })

    builder.addCase(logOut, (state) => {
      state.list = [];
      state.map = [];
      state.taskListId = null;
    })
  }
})

export const taskReducer = taskSlice.reducer;