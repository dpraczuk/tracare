import { StyledWrapper, ImageContainer, FormContainer, ImageWrapper, FormWrapper, Title, SignUpContainer } from "./Login.styled"
import loginImg from '../../assets/Tracare_login_pic.png'
import LoginForm from "components/organisms/LoginForm/LoginForm"
const Login = () => {
  return (
    <StyledWrapper>
      <ImageWrapper>
        <ImageContainer>
          <img src={loginImg} />
        </ImageContainer>
      </ImageWrapper>
      <FormWrapper>
        <FormContainer>
          <Title>
            Sign in to <strong>Tracare</strong>
          </Title>
          <LoginForm />
          <SignUpContainer>
            Don't have an account? <strong>Sign up</strong>
          </SignUpContainer>
        </FormContainer>
      </FormWrapper>
    </StyledWrapper>
  )
}

export default Login