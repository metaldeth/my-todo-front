import { AxiosCoreApi } from './axiosCore';
import { AuthModule } from './modules';


export class Api {
  private readonly request: AxiosCoreApi;

  public readonly auth: AuthModule;

  constructor() {
    this.request = new AxiosCoreApi;

    this.auth = new AuthModule(this.request);
  }

  clearTokens(): void {
    this.request.accessToken = null;
  }
}

export const api = new Api();