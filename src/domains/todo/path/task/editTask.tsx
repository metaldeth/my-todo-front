import { useFormik } from "formik";
import { FC } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { TextField } from "../../../../components/textField";
import { EditTaskDTO, TaskDTO } from "../../../../types/serverInterface/task/taskDTO";
import { editTask } from "../../state/task";
import { editTaskValidationScheme } from "./validationScheme";
import css from './styles.module.scss';
import { Button } from "../../../../components/button";

export type EditTaskPropsType = {
  task: TaskDTO;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTaskListId: number;
}

export const EditTask: FC<EditTaskPropsType> = ({ task, setIsEdit, selectedTaskListId }) => {
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
      return dispatch(editTask({data: values, taskId: task.id, taskListId: selectedTaskListId })).then(() => {
        setIsEdit(false)
      }, () => {
        formikHelpers.setSubmitting(false);
      })
    }
  })
  return(
    <form onSubmit={formik.handleSubmit} style={{width: '100%'}}>
      <div className={css.createTask_textFieldBox}>
        <TextField
          isDisabled={false}
          // label='название'
          name='caption'
          placeholder='Задача'
          onNativeChange={formik.handleChange}
          value={formik.values.caption}
        />
        <TextField
          isDisabled={false}
          // label='description'
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
          onClick={() => setIsEdit(false)}
          label='Отмена'
          color="button_secondary"
        />
      </div>
    </form>
  )
}