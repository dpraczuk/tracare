import Button from 'components/atoms/Button/Button';
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FormWrapper, InputWrapper, CheckboxWrapper, LabelsWrapper, ButtonWrapper } from './LoginForm.styled'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/config'
import { useContext } from 'react'
import AuthContext from 'store/auth-context';
import {useNavigate} from 'react-router-dom';


interface Values {
    email: string;
    password: string;
    rememberMe: boolean;
}

const LoginForm: React.FC = () => {

  const navigate = useNavigate()

  const authCtx = useContext(AuthContext)

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
                const {email, password} = values;
                signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    const user = userCredential.user;
                    // authCtx.login(user.getIdToken)
                    user.getIdToken().then(token => authCtx.login(token));
                    navigate('/dashboard', {replace: true});
                    console.log(user.uid)
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                  });
                  setSubmitting(false)
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
            {authCtx.isLoggedIn ? <h1>Logged</h1> : ''}
            </Form>
        </Formik>
    </FormWrapper>
  )
}

export default LoginForm