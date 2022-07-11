import React from 'react'
import {StyledLogo} from './Logo.styled'

const Logo: React.FC<{src: string, alt: string}> = ({src, alt}) => {
  return (
    <StyledLogo src={src} alt={alt} />
  )
}

export default Logo