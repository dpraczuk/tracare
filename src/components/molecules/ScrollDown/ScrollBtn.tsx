import React from "react"
import { StyledWrapper, ImageWrapper } from "./ScrollBtn.styled"

const ScrollButton: React.FC<{ onClickHandler?: () => void, src: string, alt?: string, width?: string, height?: string}> = ({src, alt, onClickHandler, height, width}) => {
  return (
    <StyledWrapper>
      <ImageWrapper>
        <img src={src} alt={alt} onClick={onClickHandler} width={width} height={height}/>
      </ImageWrapper>
    </StyledWrapper>
  )
}

export default ScrollButton