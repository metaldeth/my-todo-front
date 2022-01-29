import { FC } from 'react'
import { useFormik } from "formik";
import { CreateTaskListDTO } from '../../../../types/serverInterface/task/taskListDTO';
import { useAppDispatch } from '../../../../app/hooks';
import { useNavigate  } from 'react-router';
import { createTaskListValidationScheme } from './validationScheme';
import { ContentContainer } from '../../../../components/contentContainer';
import { Card } from '../../../../components/card';
import { TextField } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { createTaskList } from '../../state';
import { AppBar } from '../../../../components/appBar';
import { AppBarButton } from '../../../../components/appBar/button';
import { useParams } from 'react-router';
import { RouteTaskListParam } from '../../types';

const initialValues: CreateTaskListDTO = {
  caption: '',
}

export const CreateTaskList: FC<{}> = () => {
  const { taskListId } = useParams<RouteTaskListParam>();
  const convertedId = Number(taskListId);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: createTaskListValidationScheme,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(createTaskList(values)).then(() => {
        navigate('/taskList/list')
      }, () => {
        formikHelpers.setSubmitting(false);
      })
    }
  })

  return (
    <>
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
            <div className='button'>
              <Button
                onClick={() => formik.isSubmitting}
                label='create'
              />
            </div>
          </form>
        </Card>
      </ContentContainer>
    </>
  )
}