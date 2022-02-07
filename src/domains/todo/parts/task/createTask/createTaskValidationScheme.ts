import * as Yup from 'yup'
import { CreateTaskDTO } from '../../../../../types/serverInterface/task/taskDTO'

type CreateTaskValidateType = Omit<CreateTaskDTO, 'description'>

export const createTaskValidationScheme: Yup.SchemaOf<CreateTaskValidateType> = Yup.object().shape({
  caption: Yup.string()
    .required('Required'),
})