import { useFormik } from "formik";
import { FC } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { Button } from "../../../../components/button";
import { TextField } from "../../../../components/textField";
import { createTaskList } from "../../state/taskList";
import css from './styles.module.scss';
import { createTaskListValidationScheme } from "./validationScheme";

export type CreateTaskListPropsType = {
  setIsCreateTaskList: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  caption: '',
}

export const CreateTaskList: FC<CreateTaskListPropsType> = ({ setIsCreateTaskList }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    validationSchema: createTaskListValidationScheme,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(createTaskList( values )).then(() => {
        setIsCreateTaskList(false)
      }, () => {
        formikHelpers.setSubmitting(false);
      })
    }
  })

  return(
    <div className={css.createTaskList_modal}>
      <div className={css.createTaskList_box}>
        <h1>Создать список задач</h1>
        <form onSubmit={formik.handleSubmit} className={css.createTaskList_form}>
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
              onClick={() => setIsCreateTaskList(false)}
              label='Отмена'
              color="button_secondary"
            />
          </div>
        </form>
      </div>
    </div>
  )
}