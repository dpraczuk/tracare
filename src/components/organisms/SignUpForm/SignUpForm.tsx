import { FormWrapper, InputWrapper, ButtonWrapper, CheckboxWrapper } from './SignUpForm.styled'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../../firebase/config';
import Button from 'components/atoms/Button/Button';

interface Values {
  // userName: string;
  email: string;
  password: string;
  confirm: string;
  rememberMe: boolean;
}

const SignUpForm = () => {


  
  return (
    <FormWrapper>
      <Formik
            initialValues={{
                email: '',
                password: '',
                confirm: '',
                rememberMe: false,
            }}
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                const {email, password} = values;
                createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode)
                    const errorMessage = error.message;
                    console.log(errorMessage)
                  });
                setSubmitting(false)
              }}
        >
            <Form>
              {/* <InputWrapper>
                <label htmlFor="userName">Name</label>
                <Field id="userName" name="userName" />
              </InputWrapper> */}
              <InputWrapper>
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" />
              </InputWrapper>
              <InputWrapper>
                    <label htmlFor="password">Password</label>
                <Field id="password" name="password" type="password"/>
              </InputWrapper>
              <InputWrapper>
                    <label htmlFor="confirm">Confirm password</label>
                <Field id="confirm" name="confirm" type="password"/>
              </InputWrapper>
              <CheckboxWrapper>
                <Field id="rememberMe" name="rememberMe" type="checkbox" />
                <label htmlFor="rememberMe">Remember me</label>
              </CheckboxWrapper>

              <ButtonWrapper>
                <Button type="submit">Continue</Button>
              </ButtonWrapper>
            </Form>
        </Formik>
    </FormWrapper>
  )
}

export default SignUpForm