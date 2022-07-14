import { RegisterWrapper, SignUpFormWrapper } from "./Register.styled"
import FormTitle from "components/atoms/FormTitle/FormTitle"
import SignUpForm from "components/organisms/SignUpForm/SignUpForm"

const Register = () => {
  return (
    <RegisterWrapper>
      <SignUpFormWrapper>
        <FormTitle>
          Sign up to <strong>Tracare</strong>
        </FormTitle>
        <SignUpForm />
      </SignUpFormWrapper>
    </RegisterWrapper>
  )
}

export default Register