import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer } from '../domains/auth/state';
import { commentReducer } from '../domains/todo/state/comment';
import { taskReducer } from '../domains/todo/state/task';
import { taskListReducer } from '../domains/todo/state/taskList';

export const store = configureStore({
  devTools: true,

  reducer: {
    auth: authReducer,
    taskList: taskListReducer,
    task: taskReducer,
    comment: commentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;