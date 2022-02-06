export type TaskListDTO = {
  id: number;
  caption: string;
  isFavorite: boolean;
}

export type CreateTaskListDTO = {
  caption: string;
}

export type EditTaskListDTO = {
  caption: string;
  isFavorite: boolean;
}