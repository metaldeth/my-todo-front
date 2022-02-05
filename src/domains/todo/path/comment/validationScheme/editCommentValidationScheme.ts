import * as Yup from 'yup'
import { EditCommentDTO } from '../../../../../types/serverInterface/task/comment'

export const editCommentValidationScheme: Yup.SchemaOf<EditCommentDTO> = Yup.object().shape({
  caption: Yup.string()
    .required('Required'),
})