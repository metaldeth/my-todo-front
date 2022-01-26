import { AxiosCoreApi } from './axiosCore';
import { 
  AuthModule, 
  TaskListModule,
  TaskModule, 
} from './modules';


export class Api {
  private readonly request: AxiosCoreApi;

  public readonly auth: AuthModule;
  public readonly taskList: TaskListModule;
  public readonly task: TaskModule;

  constructor() {
    this.request = new AxiosCoreApi;

    this.auth = new AuthModule(this.request);
    this.taskList = new TaskListModule(this.request);
    this.task = new TaskModule(this.request);
  }

  clearTokens(): void {
    this.request.accessToken = null;
  }
}

export const api = new Api();