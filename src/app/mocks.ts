import {MainUserDataDTO, SignInUserDTO, SignUpUserDTO} from "../types/serverInterface";
import {CreateTaskListDTO, EditTaskListDTO, TaskListDTO} from "../types/serverInterface/task/taskListDTO";
import {CreateTaskDTO, EditTaskDTO, TaskDTO} from "../types/serverInterface/task/taskDTO";

const taskLists: TaskListDTO[] = [
  {
    id: 1,
    caption: 'taskList1',
    isFavorite: true,
  },
  {
    id: 2,
    caption: 'taskList2',
    isFavorite: true,
  },
  {
    id: 3,
    caption: 'taskList3',
    isFavorite: false,
  }
];

const listOfTask: Record<number, TaskDTO[]> = {
  1: [
    {
      id: 1, caption: 'task1', description: 'task1 description', isComplete: false,
    },
    {
      id: 2, caption: 'task2', description: 'task2 description', isComplete: false,
    },
    {
      id: 3, caption: 'task3', description: 'task3 description', isComplete: true,
    },
  ],
  2: [
    {
      id: 21, caption: 'task1', description: 'task1 description', isComplete: true,
    },
    {
      id: 22, caption: 'task2', description: 'task2 description', isComplete: true,
    },
    {
      id: 23, caption: 'task3', description: 'task3 description', isComplete: false,
    },
  ],
  3: [
    {
      id: 31, caption: 'task1', description: 'task1 description', isComplete: true,
    },
    {
      id: 32, caption: 'task2', description: 'task2 description', isComplete: false,
    },
    {
      id: 33, caption: 'task3', description: 'task3 description', isComplete: false,
    },
  ],
}

const getTaskListIndexById = (taskListId: number) =>
  taskLists.findIndex(({id}) => id === taskListId);

const getListOfTaskByTaskListId = (taskListId: number) =>
  listOfTask[taskListId].filter(({isComplete}) => !isComplete);

const getListOfCompletedTasksByTaskListId = (taskListId: number) =>
  listOfTask[taskListId].filter(({isComplete}) => isComplete);

class AuthModuleMock {
  fetchMainUserData(): Promise<MainUserDataDTO> {
    return Promise.resolve({id: 1, name: 'admin'})
  }

  signIn({name, password}: SignInUserDTO): Promise<void> {
    return (name === 'admin' && password === 'admin')
      ? Promise.resolve()
      : Promise.reject()
  }

  // Возможность регистрации заблокирована для упрощения
  signUp(data: SignUpUserDTO): Promise<void> {
    return Promise.reject();
  }
}

class TaskListModuleMock {
  fetchListOfTaskList(): Promise<TaskListDTO[]> {
    return Promise.resolve(taskLists)
  }

  create(data: CreateTaskListDTO): Promise<TaskListDTO> {
    const newTaskListId = taskLists.length;

    taskLists.push({...data, isFavorite: false, id: newTaskListId});

    return Promise.resolve({...data, isFavorite: false, id: newTaskListId});
  }

  edit(data: EditTaskListDTO, taskListId: number): Promise<TaskListDTO> {
    const index = getTaskListIndexById(taskListId);
    taskLists[index] = {...data, id: taskListId};

    return Promise.resolve({...data, id: taskListId});
  }

  remove(taskListId: number): Promise<void> {
    const index = getTaskListIndexById(taskListId);
    taskLists.splice(index, 1);

    return Promise.resolve();
  }
}

class TaskModuleMock {
  fetchListOfTaskByTaskListId(taskListId: number): Promise<TaskDTO[]> {
    return Promise.resolve(getListOfTaskByTaskListId(taskListId));
  }

  fetchListOfCompletedTaskByTaskListId(taskListId: number): Promise<TaskDTO[]> {
    return Promise.resolve(getListOfCompletedTasksByTaskListId(taskListId));
  }

  create(data: CreateTaskDTO, taskListId: number): Promise<TaskDTO> {
    const taskId = listOfTask[taskListId]?.length + 10 * taskListId;
    listOfTask[taskListId].push({...data, id: taskId, isComplete: false});
    const task = listOfTask[taskListId].find(({id}) => id === taskId);

    return task ? Promise.resolve(task) : Promise.reject();
  }

  edit(data: EditTaskDTO, taskId: number, taskListId: number): Promise<TaskDTO> {
    const index = listOfTask[taskListId].findIndex(({id}) => id === taskId);
    listOfTask[taskListId][index] = {...data, id: taskId};
    const task = listOfTask[taskListId].find(({id}) => id === taskId);

    return task ? Promise.resolve(task) : Promise.reject();
  }

  remove(taskListId: number, taskId: number):
    Promise<void> {
    const index = listOfTask[taskListId].findIndex(({id}) => id === taskId);
    listOfTask[taskListId].splice(index, 1);

    return Promise.resolve();
  }
}

export class Mocks {
  public readonly auth: AuthModuleMock;
  public readonly taskList: TaskListModuleMock;
  public readonly task: TaskModuleMock;

  constructor() {
    this.auth = new AuthModuleMock();
    this.taskList = new TaskListModuleMock();
    this.task = new TaskModuleMock();
  }
}

export const mocks = new Mocks();
