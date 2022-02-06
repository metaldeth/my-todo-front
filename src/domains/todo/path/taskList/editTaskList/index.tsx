import { useFormik } from "formik";
import { FC, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { Button } from "../../../../../components/button";
import { TextField } from "../../../../../components/textField";
import { editTaskList, selectTaskListById } from "../../../state/taskList";
import { editTaskListValidationScheme } from "./editTaskListValidationScheme";
import css from './styles.module.scss';

export type EditTaskListPropsType = {
  selectedTaskListId: number;
  onCloseEdit: VoidFunction;
}

export const EditTaskList: FC<EditTaskListPropsType> = memo(({ selectedTaskListId, onCloseEdit }) => {
  const dispatch = useAppDispatch();

  const taskList = useAppSelector(selectTaskListById(selectedTaskListId));

  const initialValues = {
    caption: taskList.caption,
    isFavorite: taskList.isFavorite,
  }

  const formik = useFormik({
    validationSchema: editTaskListValidationScheme,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(editTaskList({ data: values, taskListid: selectedTaskListId })).then(() => {
        onCloseEdit()
      }, () => {
        formikHelpers.setSubmitting(false);
      })
    }
  })

  return(
    <form onSubmit={formik.handleSubmit}>
      <div className={css.editTask_textFieldBox}>
        <TextField
          isDisabled={false}
          // label='название'
          name='caption'
          placeholder='Задача'
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
          onClick={() => onCloseEdit()}
          label='Отмена'
          color="button_secondary"
        />
      </div>
    </form>
  )
})