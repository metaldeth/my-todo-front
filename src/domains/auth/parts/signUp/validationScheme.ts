import * as Yup from 'yup';
import {SignUpUserDTO} from '../../../../types/serverInterface/user/userDTO';

export const signUpvalidationSchema: Yup.SchemaOf<SignUpUserDTO> = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});