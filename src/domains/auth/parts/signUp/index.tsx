import { useFormik } from "formik";
import { memo } from "react";
import { signUpvalidationSchema } from "./validationScheme";
import { Link } from 'react-router-dom';
import { useAppDispatch } from "../../../../app/hooks";
import { ContentContainer } from "../../../../components/contentContainer";
import { Card } from "../../../../components/card";
import { Button } from "../../../../components/button";
import { TextField } from "../../../../components/input";
import { SignUpUserDTO } from "../../../../types/serverInterface";
import { signUp } from "../../state";

const initialValues: SignUpUserDTO = {
  name: '',
  password: ''
}

export const SignUp = memo(() => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    // validationSchema: signUpvalidationSchema,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      console.log('ttt');
      return dispatch(signUp(values)).catch(() => {
        formikHelpers.setSubmitting(false);
      })
    }
  })


  return (
    <ContentContainer>
      <Card>
        <h1>
          Log Up
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name='name'
            isDisabled={false}
            label="name-label"
            placeholder="name-placeholder"
            type="text"
            onNativeChange={formik.handleChange}
            value={formik.values.name}
          />
          <TextField
            name='password'
            isDisabled={false}
            label="name-label"
            placeholder="name-placeholder"
            type="text"
            onNativeChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className='button'>
            <Button
              label="signUp"
              onClick={() => formik.isSubmitting}
            />
            <Link to='/auth/signIn'>Sign in</Link>
          </div>
        </form>
      </Card>
    </ContentContainer>
  )
})