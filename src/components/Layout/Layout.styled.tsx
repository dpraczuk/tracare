import { developTheme, main_colors } from "components/Theme/Theme";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
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
            color: ${developTheme.primary_text};
            background-color: transparent;
        }
    }
    li {
        list-style: none;
    }
    li:nth-child(1) {
        position: relative;
        ::after{
            position: absolute;
            top: 16px;
            right: 85px;
            content: 'beta';
            color: ${main_colors.green};
            font-weight: 600;
            font-size: 12px;
        }
    }
    a {
        font-family: 'Montserrat';
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