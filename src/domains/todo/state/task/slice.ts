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

export interface TaskListState {
  map: Record<number, TaskDTO>;
  list: number[];
  listByTaskListId: Record<number, Array<number>>;
  listOfCompletedTaskByTaskListId: Record<number, Array<number>>;
}

const initialState: TaskListState = {
  map: {},
  list: [],
  listByTaskListId: {},
  listOfCompletedTaskByTaskListId: {},
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

    builder.addCase(fetchListOfCompletedTaskByTaskListId.fulfilled, (state, action) => {
      const { list, taskListId } = action.payload;

      state.list = [];
      state.listOfCompletedTaskByTaskListId[taskListId] = [];

      list.forEach(task => {
        state.map[task.id] = task;
        state.list.push(task.id);
        state.listOfCompletedTaskByTaskListId[taskListId].push(task.id);
      })
    })

    builder.addCase(createTask.fulfilled, (state, action) => {
      const { data, taskListId } = action.payload;
      state.map[data.id] = data;
      state.list.push(data.id);
      state.listByTaskListId[taskListId].push(data.id)
    })

    builder.addCase(editTask.fulfilled, (state, action) => {
      const { data: task, taskListId } = action.payload;
      state.map[task.id] = task;


      if(task.isComplete) {
        const indexOfDelete = state.listByTaskListId[taskListId].findIndex(id => task.id === id);
        if(indexOfDelete === -1) return;
        state.listByTaskListId[taskListId].splice(indexOfDelete, 1);
        state.listOfCompletedTaskByTaskListId[taskListId].push(task.id);
      }else {
        const indexOfDelete = state.listOfCompletedTaskByTaskListId[taskListId].findIndex(id => task.id === id);
        if(indexOfDelete === -1) return;
        state.listOfCompletedTaskByTaskListId[taskListId].splice(indexOfDelete, 1);
        state.listByTaskListId[taskListId].push(task.id);
      }
    })

    builder.addCase(removeOneTask.fulfilled, (state, action) => {
      const { taskListId, taskId } = action.payload;
      const indexOfDelete = state.listByTaskListId[taskListId].findIndex(id => id === taskId);
      state.listByTaskListId[taskListId].splice(indexOfDelete, 1);
    })

    builder.addCase(removeTask.fulfilled, (state, action) => {
      const { taskListId, taskId } = action.payload;
      const indexOfDelete = state.listByTaskListId[taskListId].findIndex(id => id === taskId);
      state.listByTaskListId[taskListId].splice(indexOfDelete, 1);

      //todo
    })
  }
})

export const taskReducer = taskSlice.reducer;