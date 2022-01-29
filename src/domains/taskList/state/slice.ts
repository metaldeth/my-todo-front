import { createSlice } from "@reduxjs/toolkit";
import { TaskListType } from "../../../types/serverInterface/task/taskListDTO";
import { createTaskList, editTaskList, fetchListOfTaskList, removeTaskList } from "./thunk";

export interface TaskListState {
  map: Record<number, TaskListType>;
  list: number[];
  listByUserId: Record<number, Array<number>>;
  listByTaskId: Record<number, Array<number>>;
}

const initialState: TaskListState = {
  map: {},
  list: [],
  listByUserId: {},
  listByTaskId: {},
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
        state.map[taskList.id] = {
          id: taskList.id,
          caption: taskList.caption,
        };
        state.list.push(taskList.id);
      })
    })

    builder.addCase(createTaskList.fulfilled, (state, action) => {
      const taskList = action.payload;
    
      state.map[taskList.id] = {id: taskList.id, caption: taskList.caption};
      state.list.push(taskList.id);
    })

    builder.addCase(editTaskList.fulfilled, (state, action) => {
      const taskList = action.payload;
      state.map[taskList.id] = {id: taskList.id, caption: taskList.caption};
    })

    builder.addCase(removeTaskList.fulfilled, (state, action) => {
      const taskListId = action.payload;

      delete state.map[taskListId];

      //todo
    })
  }
})

export const taskListReducer = taskListSlice.reducer;