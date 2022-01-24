import { AxiosCoreApi } from './axiosCore';
import { AuthModule, TaskListModule } from './modules';


export class Api {
  private readonly request: AxiosCoreApi;

  public readonly auth: AuthModule;
  public readonly taskList: TaskListModule;

  constructor() {
    this.request = new AxiosCoreApi;

    this.auth = new AuthModule(this.request);
    this.taskList = new TaskListModule(this.request);
  }

  clearTokens(): void {
    this.request.accessToken = null;
  }
}

export const api = new Api();