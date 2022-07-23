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
export const LabelsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
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
