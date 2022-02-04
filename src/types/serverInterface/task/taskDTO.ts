export type TaskDTO = {
  id: number;
  caption: string;
  description: string;
  isComplete: boolean;
}

export type CreateTaskDTO = {
  caption: string;
  description: string;
}

export type EditTaskDTO = {
  caption: string;
  description: string;
  isComplete: boolean;
}