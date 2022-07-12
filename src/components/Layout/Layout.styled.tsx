import { developTheme, main_colors } from "components/Theme/Theme";
import styled from "styled-components";

export const NavigationWrapper = styled.header`
    width: 60%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .logo {
        height: 70px;
        width: 70px;
        margin: 0 35px;
    }
    nav {
        min-width: 34vw
    }
    ul {      
        display: flex;
        flex-direction: row;
        li {
            flex-grow: 1;
        }
    }
    button {
        height: 50px;
        width: 140px;
        font-size: 16px;
        border-radius: 5px;
        font-family: 'Montserrat';
        font-weight: bold;
        transition: .3s;
        &:hover {
            background-color: ${main_colors.greenActive};
        }
    }
    li {
        list-style: none;
    }

    li:nth-child(1) {
        a {
            position: relative;
            ::after{
                position: absolute;
                top: 16px;
                right: -2px;
                content: 'beta';
                color: ${main_colors.green};
                font-weight: 600;
                font-size: 12px;
            }

        }
    }

    a {
        text-decoration: none;
        color: ${developTheme.primary_text};
        font-size: 16px;
        font-weight: 600;
        transition: .1s;
        &:hover {
                color: ${main_colors.green}
        }
    }
`

export const Content = styled.div`
    min-height: 80vh;
    width: 52%;
    margin: 0 auto;
`

export const Footer = styled.footer`
    text-align: right;
    margin-right: 30px;
    p {
        margin: 30px 0;
    }
`