import { CreateTaskDTO, EditTaskDTO, TaskDTO } from '../../../../types/serverInterface/task/taskDTO';
import {AbstractApiModule} from '../../abstractApiModule';

export class TaskModule extends AbstractApiModule{
  fetchListOfTaskByTaskListId(taskListId: number): Promise<TaskDTO[]> {
    return this.request.get<unknown, TaskDTO[]>(`/taskList/${taskListId}/task`);
  }

  fetchListOfCompletedTaskByTaskListId(taskListId: number): Promise<TaskDTO[]> {
    return this.request.get<unknown, TaskDTO[]>(`/taskList/${taskListId}/task/isComplete`);
  }

  create(data: CreateTaskDTO, taskListId: number) {
    return this.request.post<CreateTaskDTO, TaskDTO>(`/taskList/${taskListId}/task`, data);
  }

  edit(data: EditTaskDTO, taskId: number, taskListId: number) {
    return this.request.put<EditTaskDTO, TaskDTO>(`/taskList/${taskListId}/task/${taskId}`, data);
  }

  remove(taskId: number): Promise<void> {
    return this.request.delete(`/task/${taskId}`);
  }
}