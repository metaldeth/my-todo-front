import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer } from '../domains/auth/state';
import { taskReducer } from '../domains/task/state';
import { taskListReducer } from '../domains/taskList/state';

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
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;