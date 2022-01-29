import { FC } from 'react'
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useNavigate  } from 'react-router';
import { ContentContainer } from '../../../../components/contentContainer';
import { Card } from '../../../../components/card';
import { TextField } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { EditTaskDTO } from '../../../../types/serverInterface/task/taskDTO';
import { editTask, selectTaskById } from '../../state';
import { useParams } from 'react-router';
import { RouteTaskParam } from '../../types';
import { editTaskValidationScheme } from './validationScheme';

export type EditTaskPropsType = {
  taskListId: number;
}

export const EditTask: FC<EditTaskPropsType> = (props) => {
  const { taskListId } = props;

  const { taskId } = useParams<RouteTaskParam>();
  const convertedId = Number(taskId);

  const task = useAppSelector(selectTaskById(convertedId))

  const initialValues: EditTaskDTO = {
    caption: task.caption,
    description: task.description,
  }

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: editTaskValidationScheme,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(editTask({data: values, taskId: convertedId })).then(() => {
        navigate(`/taskList/${taskListId}/task`)
      }, () => {
        formikHelpers.setSubmitting(false);
      })
    }
  })

  return (
    <ContentContainer>
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            isDisabled={false}
            label='название'
            name='caption'
            type='text'
            placeholder='caption'
            onNativeChange={formik.handleChange}
            value={formik.values.caption}
          />
          <TextField
            isDisabled={false}
            label='description'
            name='description'
            type='text'
            placeholder='description'
            onNativeChange={formik.handleChange}
            value={formik.values.description}
          />
          <div className='button'>
            <Button
              onClick={() => formik.isSubmitting}
              label='create'
            />
          </div>
        </form>
      </Card>
    </ContentContainer>
  )
}