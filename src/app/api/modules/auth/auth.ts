import { MainUserDataDTO, SignInUserDTO, SignUpUserDTO, TokenPairDTO } from '../../../../types/serverInterface/user/userDTO';
import {AbstractApiModule} from '../../abstractApiModule';

export class AuthModule extends AbstractApiModule{
  fetchMainUserData(): Promise<MainUserDataDTO> {
    return this.request.get<unknown, MainUserDataDTO>('/auth');
  }

  signIn(data: SignInUserDTO): Promise<void> {
    return this.request.post<SignInUserDTO, TokenPairDTO>('/auth/signIn', data)
      .then((response) => {
        this.request.accessToken = response.accessToken
      })
  }

  signUp(data: SignUpUserDTO): Promise<void> {
    return this.request.post<SignUpUserDTO>('/auth/signUp', data)
  }
}
