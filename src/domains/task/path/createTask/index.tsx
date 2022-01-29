import { FC } from 'react'
import { useFormik } from "formik";
import { useAppDispatch } from '../../../../app/hooks';
import { useNavigate  } from 'react-router';
import { ContentContainer } from '../../../../components/contentContainer';
import { Card } from '../../../../components/card';
import { TextField } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { CreateTaskDTO } from '../../../../types/serverInterface/task/taskDTO';
import { createTaskValidationScheme } from './validationScheme';
import { createTask } from '../../state';
import { useParams } from 'react-router';
import { RouteTaskListParam } from '../../../taskList/types';

const initialValues: CreateTaskDTO = {
  caption: '',
  description: '',
}

// export type CreateTaskPropsType = {
//   taskListId: number;
// }

export const CreateTask: FC<{}> = (props) => {
  const { taskListId } = useParams<RouteTaskListParam>();
  const convertedId = Number(taskListId);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: createTaskValidationScheme,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(createTask({data: values, taskListId: convertedId })).then(() => {
        navigate(`/taskList/${convertedId}/card`)
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