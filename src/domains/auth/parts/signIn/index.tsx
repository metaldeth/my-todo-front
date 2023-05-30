import { useFormik } from "formik";
import { memo } from "react";
import { SignInUserDTO } from "../../../../types/serverInterface/user/userDTO";
import { signIn } from "../../state";
import { signInvalidationSchema } from "./validationScheme";
import { Link } from 'react-router-dom';
import { useAppDispatch } from "../../../../app/hooks";
import { ContentContainer } from "../../../../components/contentContainer";
import { Card } from "../../../../components/card";
import { Button } from "../../../../components/button";
import { TextField } from "../../../../components/textField";
import commonStyle from '../../auth.module.sass';

const initialValues: SignInUserDTO = {
  name: '',
  password: ''
}

export const SignIn = memo(() => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    validationSchema: signInvalidationSchema,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(signIn(values)).catch(() => {
        formikHelpers.setSubmitting(false);
      })
    }
  })


  return (
    <ContentContainer className={commonStyle.formContainer}>
      <Card className={commonStyle.formCard}>
        <h1 className={commonStyle.formHeader}>
          Log in
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name='name'
            isDisabled={false}
            label="name"
            placeholder="name"
            classNameInput={commonStyle.formInput}
            onNativeChange={formik.handleChange}
            value={formik.values.name}
          />
          <TextField
            name='password'
            isDisabled={false}
            label="password"
            placeholder="password"
            isPassword={true}
            classNameInput={commonStyle.formInput}
            onNativeChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className={commonStyle.formButtonGroup}>
            <Button
              label="signIn"
              onClick={() => formik.isSubmitting}
            />
            {/* Регистрацию убрал для упрощения моков */}
            {/* <Link to='/auth/signUp'>Sign Up</Link> */}
          </div>
        </form>
        <div>Login: admin</div>
        <div>Password: admin</div>
      </Card>
    </ContentContainer>
  )
})