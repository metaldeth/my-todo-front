import { useFormik } from "formik";
import { FC } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { Button } from "../../../../components/button";
import { TextField } from "../../../../components/textField";
import { CreateCommentDTO } from "../../../../types/serverInterface/task/comment";
import { createComment } from "../../state/comment";
import css from './styles.module.scss';
import { createCommentValidationScheme } from "./validationScheme";

export type CreteCommentPropsType = {
  taskId: number;
  setIsOpenCreate: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues: CreateCommentDTO = {
  caption: '',
}

export const CreateComment: FC<CreteCommentPropsType> = ({
  taskId,
  setIsOpenCreate,
}) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    validationSchema: createCommentValidationScheme,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(createComment({data: values, taskId })).then(() => {
        setIsOpenCreate(false)
      }, () => {
        formikHelpers.setSubmitting(false);
      })
    }
  })

  return(
    <form onSubmit={formik.handleSubmit}>
      <div className={css.createTask_textFieldBox}>
        <TextField
          isDisabled={false}
          // label='название'
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
          onClick={() => setIsOpenCreate(false)}
          label='Отмена'
          color="button_secondary"
        />
      </div>
    </form>
  )
}