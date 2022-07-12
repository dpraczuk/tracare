import React from 'react'
import { StyledWrapper } from './WorkoutItem.styled'

const WorkoutItem: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <StyledWrapper>WorkoutItem</StyledWrapper>
  )
}

export default WorkoutItem