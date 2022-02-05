import * as Yup from 'yup'
import { CreateCommentDTO } from '../../../../../types/serverInterface/task/comment'

export const createCommentValidationScheme: Yup.SchemaOf<CreateCommentDTO> = Yup.object().shape({
  caption: Yup.string()
    .required('Required'),
})