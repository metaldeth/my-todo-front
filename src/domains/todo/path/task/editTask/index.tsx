import { useFormik } from "formik";
import { memo } from "react";
import { useAppDispatch } from "../../../../../app/hooks";
import { TextField } from "../../../../../components/textField";
import { EditTaskDTO, TaskDTO } from "../../../../../types/serverInterface/task/taskDTO";
import { editTask } from "../../../state/task";
import css from './styles.module.scss';
import { Button } from "../../../../../components/button";
import { editTaskValidationScheme } from "./editTaskValidationScheme";

export type EditTaskPropsType = {
  task: TaskDTO;
  selectedTaskListId: number;
  onCLoseEdit: VoidFunction;
}

export const EditTask = memo<EditTaskPropsType>(({ 
  task, 
  selectedTaskListId,
  onCLoseEdit, 
}) => {
  const dispatch = useAppDispatch();

  const initialValues: EditTaskDTO = {
    caption: task.caption,
    description: task.description,
    isComplete: task.isComplete
  }

  const formik = useFormik({
    validationSchema: editTaskValidationScheme,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(editTask({data: values, taskId: task.id, taskListId: selectedTaskListId }))
        .then(() => onCLoseEdit())
        .catch(() => formikHelpers.setSubmitting(false))
    }
  })
  return(
    <form onSubmit={formik.handleSubmit} style={{width: '100%'}}>
      <div className={css.editTask_textFieldBox}>
        <TextField
          isDisabled={false}
          name='caption'
          placeholder='Задача'
          onNativeChange={formik.handleChange}
          value={formik.values.caption}
        />
        <TextField
          isDisabled={false}
          name='description'
          placeholder='Описание'
          onNativeChange={formik.handleChange}
          value={formik.values.description}
        />
      </div>
      <div>
        <Button
          onClick={() => formik.isSubmitting}
          label='Сохранить'
          color="button_primary"
        />
        <Button
          onClick={() => onCLoseEdit()}
          label='Отмена'
          color="button_secondary"
        />
      </div>
    </form>
  )
})