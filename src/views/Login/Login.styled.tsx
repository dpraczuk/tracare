import { main_colors } from "components/Theme/Theme";
import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    min-height: 100vh;
    color: ${main_colors.grey};
`


export const ImageContainer = styled.div`
    display: flex;
    height: 100%;
    justify-content: right;
    margin: 0 120px;
    align-items: center;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const ImageWrapper = styled.div`
    background-color: #F7FAFC;
    width: 60%;
    justify-content: center;
    align-items: center;
`

export const FormWrapper = styled.div`
    width: 28%;
    justify-content: center;
    align-items: left;
`

export const Title = styled.h1`
    font-size: 42px;
    font-family: Roboto;
    margin-bottom: 30px;

    strong {
        color: ${main_colors.green}
    }

`

export const SignUpContainer = styled.p``