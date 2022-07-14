import { StyledWrapper, ImageContainer, FormContainer, ImageWrapper, FormWrapper,  SignUpContainer } from "./Login.styled"
import loginImg from '../../assets/Tracare_login_pic.png'
import FormTitle from "components/atoms/FormTitle/FormTitle"
import LoginForm from "components/organisms/LoginForm/LoginForm"
import { Link } from "react-router-dom"

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
          <FormTitle>
            Sign in to <strong>Tracare</strong>
          </FormTitle>
          <LoginForm />
          <SignUpContainer>
            Don't have an account? <strong><Link to='/register'>Sign up</Link></strong>
          </SignUpContainer>
        </FormContainer>
      </FormWrapper>
    </StyledWrapper>
  )
}

export default Login