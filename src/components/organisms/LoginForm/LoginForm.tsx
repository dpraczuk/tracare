import Button from 'components/atoms/Button/Button';
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FormWrapper, InputWrapper, CheckboxWrapper, LabelsWrapper, ButtonWrapper } from './LoginForm.styled'

interface Values {
    email: string;
    password: string;
    rememberMe: boolean;
}

const LoginForm: React.FC = () => {
  return (
    <FormWrapper>
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
            }}
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
              }}
        >
            <Form>
              <InputWrapper>
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" />
              </InputWrapper>
              <InputWrapper>
                <LabelsWrapper>
                    <label htmlFor="password">Password</label>
                    <label className='motive' htmlFor='password'>Forgot your password?</label>
                </LabelsWrapper>
                <Field id="password" name="password" type="password"/>
              </InputWrapper>
              <CheckboxWrapper>
                <Field id="rememberMe" name="rememberMe" type="checkbox" />
                <label htmlFor="rememberMe">Remember me</label>
              </CheckboxWrapper>

              <ButtonWrapper>
                <Button type="submit">Log in</Button>
              </ButtonWrapper>
            </Form>
        </Formik>
    </FormWrapper>
  )
}

export default LoginForm