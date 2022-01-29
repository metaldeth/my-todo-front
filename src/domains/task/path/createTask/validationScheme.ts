import * as Yup from 'yup'
import { CreateTaskDTO } from '../../../../types/serverInterface/task/taskDTO'

export const createTaskValidationScheme: Yup.SchemaOf<CreateTaskDTO> = Yup.object().shape({
  caption: Yup.string()
    .required('Required'),
  description: Yup.string()
    .required('Required'),
})