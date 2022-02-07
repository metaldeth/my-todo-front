import { useFormik } from "formik";
import { memo } from "react";
import { signUpvalidationSchema } from "./validationScheme";
import { Link } from 'react-router-dom';
import { useAppDispatch } from "../../../../app/hooks";
import { ContentContainer } from "../../../../components/contentContainer";
import { Card } from "../../../../components/card";
import { Button } from "../../../../components/button";
import { TextField } from "../../../../components/textField";
import { SignUpUserDTO } from "../../../../types/serverInterface";
import { signUp } from "../../state";
import commonStyle from '../../auth.module.sass';

const initialValues: SignUpUserDTO = {
  name: '',
  password: ''
}

export const SignUp = memo(() => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    validationSchema: signUpvalidationSchema,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(signUp(values)).catch(() => {
        formikHelpers.setSubmitting(false);
      })
    }
  })


  return (
    <ContentContainer className={commonStyle.formContainer}>
      <Card className={commonStyle.formCard}>
        <h1 className={commonStyle.formHeader}>
          Sign up
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name='name'
            isDisabled={false}
            label="name"
            placeholder="name"
            type="text"
            classNameInput={commonStyle.formInput}
            onNativeChange={formik.handleChange}
            value={formik.values.name}
          />
          <TextField
            name='password'
            isDisabled={false}
            label="password"
            placeholder="password"
            type="text"
            isPassword={true}
            classNameInput={commonStyle.formInput}
            onNativeChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className={commonStyle.formButtonGroup}>
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