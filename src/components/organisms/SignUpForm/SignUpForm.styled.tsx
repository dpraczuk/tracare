import styled from "styled-components";
import { main_colors } from "components/Theme/Theme";

export const FormWrapper = styled.div`
    display: flex;
    width: 66%;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    justify-content: center;

    form {
        width: 100%;
    }

    button {
        height: 54px;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 600;
        /* width: 80%; */
        margin: 0 auto;
    }
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    /* width: 100%; */

    label {
        margin: 7px 0 7px 2px;
    }
    input {
        border: 1px solid ${main_colors.lightGrey};
        border-radius: 5px;
        height: 40px;
        padding: 0 10px;
        font-size: 18px;
        color: ${main_colors.grey};
        
        &:focus {
            background-color: #F7FAFC;
            outline: none;
        } 
    }
`

export const CheckboxWrapper = styled.div`
    margin: 20px 0 30px;
    input {
        margin-right: 7px
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    height: 60px;
    border-radius: 5px;
    width: 100%;
    button {
        transition: .1s;
        &:hover {
            background-color: ${main_colors.greenActive}
        }
    }
`
