import { useFormik } from "formik";
import { memo } from "react";
import { useAppDispatch } from "../../../../../app/hooks";
import { Button } from "../../../../../components/button";
import { TextField } from "../../../../../components/textField";
import { CreateTaskDTO } from "../../../../../types/serverInterface/task/taskDTO";
import { createTask } from "../../../state/task";
import css from './styles.module.scss';
import { createTaskValidationScheme } from "./createTaskValidationScheme";

const initialValues: CreateTaskDTO = {
  caption: '',
  description: '',
}

export type CreateTaskPropsType = {
  selectedTaskListId: number;
  onCloseCreate: VoidFunction;
}

export const CreateTask = memo<CreateTaskPropsType>(({ 
  selectedTaskListId, 
  onCloseCreate 
}) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    validationSchema: createTaskValidationScheme,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      console.log('values, ', values);
      return dispatch(createTask({data: values, taskListId: selectedTaskListId }))
        .then(() => onCloseCreate()) 
        .catch(() => formikHelpers.setSubmitting(false))
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={css.createTask_textFieldBox}>
        <TextField
          isDisabled={false}
          name='caption'
          placeholder='Задача'
          onNativeChange={formik.handleChange}
          value={formik.values.caption}
          classNameInput={css.createTask_input}
        />
        <TextField
          isDisabled={false}
          name='description'
          placeholder='Описание'
          onNativeChange={formik.handleChange}
          value={formik.values.description }
        />
      </div>
      <div>
        <Button
          onClick={() => formik.isSubmitting}
          label='Сохранить'
          color="button_primary"
        />
        <Button
          onClick={() => onCloseCreate()}
          label='Отмена'
          color="button_secondary"
        />
      </div>
    </form>
  )
})