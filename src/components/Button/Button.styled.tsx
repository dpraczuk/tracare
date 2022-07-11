import styled from "styled-components";
import { developTheme, main_colors} from '../Theme/Theme'

export const StyledButton = styled.button`
    background-color: ${main_colors.green};
    border: none;
    color: ${developTheme.primary_bg};
    width: 100%;
    height: 100%;
    cursor: pointer;
`