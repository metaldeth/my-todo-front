import { createSlice } from "@reduxjs/toolkit";
import { TaskDTO } from "../../../types/serverInterface/task/taskDTO";
import { 
  createTask, 
  editTask, 
  fetchListOfTaskByTaskListId, 
  removeTask
} from "./thunk";

export interface TaskListState {
  map: Record<number, TaskDTO>;
  list: number[];
  listByTaskListId: Record<number, Array<number>>;
}

const initialState: TaskListState = {
  map: {},
  list: [],
  listByTaskListId: {},
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListOfTaskByTaskListId.fulfilled, (state, action) => {
      const { list, taskListId } = action.payload;

      state.list = [];
      state.listByTaskListId[taskListId] = [];

      list.forEach(task => {
        state.map[task.id] = task;
        state.list.push(task.id);
        state.listByTaskListId[taskListId].push(task.id);
      })
    })

    builder.addCase(createTask.fulfilled, (state, action) => {
      const { data, taskListId } = action.payload;
      state.map[data.id] = data;
      state.list.push(data.id);
      state.listByTaskListId[taskListId].push(data.id)
    })

    builder.addCase(editTask.fulfilled, (state, action) => {
      const data = action.payload;
      state.map[data.id] = data;
    })

    builder.addCase(removeTask.fulfilled, (state, action) => {
      const taskId = action.payload;
      delete state.map[taskId];

      //todo
    })
  }
})

export const taskReducer = taskSlice.reducer;