import React from 'react'
import { StyledButton } from './Button.styled'

const Button: React.FC<{children?: React.ReactNode, onClickHandler?: () => void, type?: "submit" | "button" | "reset"}> = ({children, onClickHandler, type}) => {
  return (
    <StyledButton onClick={onClickHandler} type={type} >{children}</StyledButton>
  )
}

export default Button