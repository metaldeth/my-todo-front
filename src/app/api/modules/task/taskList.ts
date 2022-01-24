import { CreateTaskListDTO, EditTaskListDTO, TaskListDTO } from '../../../../types/serverInterface/task/taskListDTO';
import {AbstractApiModule} from '../../abstractApiModule';

export class TaskListModule extends AbstractApiModule{
  fetchListOfTaskList(): Promise<TaskListDTO[]> {
    return this.request.get<unknown, TaskListDTO[]>('/taskList');
  }

  create(data: CreateTaskListDTO) {
    return this.request.post<CreateTaskListDTO, TaskListDTO>(`/taskList`, data);
  }

  edit(data: EditTaskListDTO, taskListId: number) {
    return this.request.put<EditTaskListDTO, TaskListDTO>(`/taskList/${taskListId}`, data);
  }

  remove(TaskListId: number): Promise<void> {
    return this.request.delete(`/taskList/${TaskListId}`);
  }
}