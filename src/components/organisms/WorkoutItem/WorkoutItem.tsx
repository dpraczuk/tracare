import EditButton from 'components/atoms/EditButton/EditButton'
import { Dayjs } from 'dayjs'
import React from 'react'
import { StyledWrapper, DateWrapper, TitleWrapper, ActivitiesWrapper, StepsWrapper, EditBtnWrapper } from './WorkoutItem.styled'

const WorkoutItem: React.FC<{date: Dayjs, id: string, key:string }> = ({date, key, id}) => {
  return (
    <StyledWrapper key={key} id={id}>
      <DateWrapper>
        <div className='day'>{date.format('DD')}</div>
        <div className='month'>{date.format('MMM')}.</div>
      </DateWrapper>
      <TitleWrapper> Very, very long training Title</TitleWrapper>
      <ActivitiesWrapper>no activities</ActivitiesWrapper>
      <StepsWrapper>
        <div className='text'>Steps</div>
        <div className='data'>2137</div>
      </StepsWrapper>
      <EditBtnWrapper>
        <EditButton />
      </EditBtnWrapper>
    </StyledWrapper>
  )
}

export default WorkoutItem