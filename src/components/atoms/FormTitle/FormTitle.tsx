import React from 'react'
import { StyledTitle } from './FormTitle.styled'


const FormTitle: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <StyledTitle>{children}</StyledTitle>
  )
}

export default FormTitle