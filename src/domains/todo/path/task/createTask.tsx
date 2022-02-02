import { useFormik } from "formik";
import { FC } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { Button } from "../../../../components/button";
import { TextField } from "../../../../components/textField";
import { CreateTaskDTO } from "../../../../types/serverInterface/task/taskDTO";
import { createTask } from "../../state/task";
import { createTaskValidationScheme } from "./validationScheme";
import css from './styles.module.scss';
import classNames from 'classnames';

const initialValues: CreateTaskDTO = {
  caption: '',
  description: ' ',
}

export type CreateTaskPropsType = {
  selectedTaskListId: number;
  setIsOpenCreate: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateTask: FC<CreateTaskPropsType> = ({ selectedTaskListId, setIsOpenCreate }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    validationSchema: createTaskValidationScheme,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(createTask({data: values, taskListId: selectedTaskListId })).then(() => {
        setIsOpenCreate(false)
      }, () => {
        formikHelpers.setSubmitting(false);
      })
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
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
          onClick={() => setIsOpenCreate(false)}
          label='Отмена'
          color="button_secondary"
        />
      </div>
    </form>
  )
}