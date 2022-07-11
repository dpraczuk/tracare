import React from 'react'
import { StyledButton } from './Button.styled'

const Button: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

export default Button