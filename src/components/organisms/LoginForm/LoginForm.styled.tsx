import { main_colors } from "components/Theme/Theme";
import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 68%;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;

    .motive {
        color: ${main_colors.green}
    }
    button {
        height: 54px;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 600;
        /* width: 80%; */
        margin: 0 auto;
    }
`

export const EmailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    label {
        margin: 5px 0;
    }
    input {
        border: none;
        background-color: #F7FAFC;
        height: 34px;
    }
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    label {
        margin: 7px 0 7px 2px;
    }
    input {
        border: none;
        background-color: #F7FAFC;
        height: 40px;
        padding: 0 5px;
    }
`

export const CheckboxWrapper = styled.div`
    margin: 20px 0 30px;
`
export const LabelsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ButtonWrapper = styled.div`
    display: flex;
    height: 60px;
    border-radius: 5px;
    width: 100%;
`
