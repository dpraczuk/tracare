import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0 auto;
        box-sizing: border-box;
    }
    body {
        /* background: theme => theme.primary_bg;
        color: theme => theme.primary_text}; */
        font-family: 'Montserrat', 'Roboto';
    }
`