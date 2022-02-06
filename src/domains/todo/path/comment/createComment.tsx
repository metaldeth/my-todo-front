import { useFormik } from "formik";
import { memo } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { Button } from "../../../../components/button";
import { TextField } from "../../../../components/textField";
import { CreateCommentDTO } from "../../../../types/serverInterface/task/comment";
import { createComment } from "../../state/comment";
import css from './styles.module.scss';
import { createCommentValidationScheme } from "./validationScheme";

export type CreteCommentPropsType = {
  taskId: number;
  onCLoseCreate: VoidFunction;
}

const initialValues: CreateCommentDTO = {
  caption: '',
}

export const CreateComment = memo<CreteCommentPropsType>(({
  taskId,
  onCLoseCreate,
}) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    validationSchema: createCommentValidationScheme,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(createComment({data: values, taskId }))
        .then(() => onCLoseCreate()) 
        .catch(() => formikHelpers.setSubmitting(false))
    }
  })

  return(
    <form onSubmit={formik.handleSubmit}>
      <div className={css.createTask_textFieldBox}>
        <TextField
          isDisabled={false}
          name='caption'
          placeholder='Комментарий'
          onNativeChange={formik.handleChange}
          value={formik.values.caption}
        />
      </div>
      <div>
        <Button
          onClick={() => formik.isSubmitting}
          label='Сохранить'
          color="button_primary"
        />
        <Button
          onClick={() => onCLoseCreate()}
          label='Отмена'
          color="button_secondary"
        />
      </div>
    </form>
  )
})