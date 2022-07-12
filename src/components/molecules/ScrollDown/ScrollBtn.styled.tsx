import styled from "styled-components";


export const StyledWrapper = styled.div`
    text-align: center;
`

export const ImageWrapper = styled.div`
    margin: 20px;
    img {
        filter: invert(81%) sepia(46%) saturate(5136%) hue-rotate(95deg) brightness(91%) contrast(101%);
        &:hover {
            cursor: pointer;
        }
    }
`