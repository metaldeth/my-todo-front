import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../domains/auth/state';
import { taskReducer } from '../domains/todo/state/task';
import { taskListReducer } from '../domains/todo/state/taskList';

export const store = configureStore({
  devTools: true,

  reducer: {
    auth: authReducer,
    taskList: taskListReducer,
    task: taskReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;