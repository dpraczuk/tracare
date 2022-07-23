import { lightTheme } from "components/Theme/Theme";
import styled from "styled-components";

export const RegisterWrapper = styled.div`
    display: flex;
    background: linear-gradient(170deg, ${lightTheme.effect} 42%, #fff 40%);
    height: 100vh;
    justify-content: center;
    align-items: center;
    color: ${lightTheme.primary_text};

`

export const SignUpFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 0px 16px 3px #e7e7e7;
    padding: 80px 0;
    h1 {
        margin-top: 0;
    }
`