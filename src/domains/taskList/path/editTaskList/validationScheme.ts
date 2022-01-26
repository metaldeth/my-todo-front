import * as Yup from 'yup'
import { EditTaskListDTO } from '../../../../types/serverInterface/task/taskListDTO'

export const editTaskListValidationScheme: Yup.SchemaOf<EditTaskListDTO> = Yup.object().shape({
  caption: Yup.string()
    .required('Required'),
})