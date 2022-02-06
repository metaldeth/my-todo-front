import * as Yup from 'yup'
import { EditTaskDTO } from '../../../../../types/serverInterface/task/taskDTO'

export const editTaskValidationScheme: Yup.SchemaOf<EditTaskDTO> = Yup.object().shape({
  caption: Yup.string()
    .required('Required'),
  description: Yup.string()
    .required('Required'),
  isComplete: Yup.boolean()
    .required('Required')
})