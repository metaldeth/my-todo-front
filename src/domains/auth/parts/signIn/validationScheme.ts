import * as Yup from 'yup';
import {SignInUserDTO} from '../../../../types/serverInterface/user/userDTO';

export const signInvalidationSchema: Yup.SchemaOf<SignInUserDTO> = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

