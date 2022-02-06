import { createSlice } from "@reduxjs/toolkit";
import { TaskListDTO } from "../../../../types/serverInterface/task/taskListDTO";
import { createTaskList, editTaskList, fetchListOfTaskList, removeTaskList } from "./thunk";

export interface TaskListState {
  map: Record<number, TaskListDTO>;
  list: number[];
}

const initialState: TaskListState = {
  map: {},
  list: [],
}

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListOfTaskList.fulfilled, (state, action) => {
      state.map = {};
      state.list = [];
      
      const list = action.payload;
      list.forEach(taskList => {
        state.map[taskList.id] = taskList;
        state.list.push(taskList.id);
      })
    })

    builder.addCase(createTaskList.fulfilled, (state, action) => {
      const taskList = action.payload;
    
      state.map[taskList.id] = taskList;
      state.list.push(taskList.id);
    })

    builder.addCase(editTaskList.fulfilled, (state, action) => {
      const taskList = action.payload;
      state.map[taskList.id] = taskList;
    })

    builder.addCase(removeTaskList.fulfilled, (state, action) => {
      const taskListId = action.payload;

      delete state.map[taskListId];

      const indexOfDelete = state.list.findIndex(id => id === taskListId);
      state.list.splice(indexOfDelete, 1);
    })
  }
})

export const taskListReducer = taskListSlice.reducer;