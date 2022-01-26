import { FC } from 'react'
import { useFormik } from "formik";
import { EditTaskListDTO } from '../../../../types/serverInterface/task/taskListDTO';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useNavigate  } from 'react-router';
import { ContentContainer } from '../../../../components/contentContainer';
import { Card } from '../../../../components/card';
import { TextField } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { useParams } from 'react-router';
import { RouteTaskListParam } from '../../types';
import { editTaskListValidationScheme } from './validationScheme';
import { editTaskList, selectTaskListById } from '../../state';

export const EditTaskList: FC<{}> = () => {
  const {taskListId} = useParams<RouteTaskListParam>();
  const convertedId = Number(taskListId);
  const taskList = useAppSelector(selectTaskListById(convertedId));

  const initialValues: EditTaskListDTO = {
    caption: taskList.caption,
  }

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: editTaskListValidationScheme,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(editTaskList({data: values, taskListid: convertedId})).then(() => {
        navigate(`/taskList/list`)
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
          <div className='button'>
            <Button
              onClick={() => formik.isSubmitting}
              label='update'
            />
          </div>
        </form>
      </Card>
    </ContentContainer>
  )
}