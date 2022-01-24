export type TaskListDTO = {
  id: number;
  caption: string;
  listOfMember: Array<{id: number, name: string, isOwner: boolean}>;
}

export type TaskListType = {
  id: number;
  caption: string;
}

export type CreateTaskListDTO = {
  caption: string;
}

export type EditTaskListDTO = {
  caption: string;
}