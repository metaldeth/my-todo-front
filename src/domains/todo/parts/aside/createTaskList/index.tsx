import { useFormik } from "formik";
import { FC, memo } from "react";
import { useAppDispatch } from "../../../../../app/hooks";
import { Button } from "../../../../../components/button";
import { TextField } from "../../../../../components/textField";
import { createTaskList } from "../../../state/taskList";
import { createTaskListValidationScheme } from "./createTaskListValidationScheme";
import css from './styles.module.scss';

export type CreateTaskListPropsType = {
  setIsCreateTaskList: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  caption: '',
}

export const CreateTaskList = memo<CreateTaskListPropsType>(({ setIsCreateTaskList }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    validationSchema: createTaskListValidationScheme,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(createTaskList( values ))
        .then(() => setIsCreateTaskList(false))
        .catch(() => formikHelpers.setSubmitting(false))
    }
  })

  return(
    <div className={css.createTaskList_box}>
      <h2 className={css.createTaskList_header}>Создать список задач</h2>
      <form onSubmit={formik.handleSubmit} className={css.createTaskList_form}>
        <div className={css.editTask_textFieldBox}>
          <TextField
            isDisabled={false}
            name='caption'
            placeholder='Задача'
            classNameInput={css.createTaskList_input}
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
            onClick={() => setIsCreateTaskList(false)}
            label='Отмена'
            color="button_secondary"
          />
        </div>
      </form>
    </div>
  )
})