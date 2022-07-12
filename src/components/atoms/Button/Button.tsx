import React from 'react'
import { StyledButton } from './Button.styled'

const Button: React.FC<{children: React.ReactNode, onClickHandler?: () => void}> = ({children, onClickHandler}) => {
  return (
    <StyledButton onClick={onClickHandler}>{children}</StyledButton>
  )
}

export default Button