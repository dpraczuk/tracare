import { lightTheme, main_colors } from "components/Theme/Theme";
import styled from "styled-components";

export const StyledWrapper = styled.div`
    font-family: Barlow;
    display: flex;
    border: 3px solid #DCDCDC;
    border-radius: 5px;
    margin: 20px 0;
    color: ${lightTheme.primary_text};
    transition: .2s;
    &:hover {
        background-color: ${lightTheme.effect};
    }
`

export const DateWrapper = styled.div`
    font-family: Barlow;
    font-weight: medium;
    max-width: 6%;
    margin: 30px 30px;
    text-align: center;
    flex-grow: 1;
    .day {
        font-size: 34px;
        margin-right: 5px;
        color: ${main_colors.green}
    }
    .month {
        font-size: 26px;
    }
    
`

export const TitleWrapper = styled.div`
    font-size: 26px;
    font-weight: 600;
    max-width: 26%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    flex-grow: 1;
    text-align: center;
`

export const ActivitiesWrapper = styled.div`
    font-size: 20px;
    font-weight: 500;
    max-width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    flex-grow: 1;
`

export const StepsWrapper = styled.div`
    font-weight: 500;
    max-width: 12%;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center;
    justify-content: center;

    .text {
        font-size: 20px;
    }
    .data {
        font-size: 30px;
        color: ${main_colors.yellow}
    }
`

export const EditBtnWrapper = styled.div`
    display: flex;
    margin: 36px;
    justify-content: center;
    max-width: 10%;
    img {
        height: 30px;
        &:hover {
            cursor: pointer
        }
    }
`