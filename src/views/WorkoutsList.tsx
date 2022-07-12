import dayjs, { Dayjs } from "dayjs"
import isoWeek from 'dayjs/plugin/isoWeek'
import { useEffect, useState } from 'react'
import arrowUp from '../assets/arrow-up.svg'
import arrowDown from '../assets/arrow-down.svg'
import ScrollButton from "components/molecules/ScrollDown/ScrollBtn"

interface dateFormat {
  day: number,
  month: number,
  year: number,
}

const WorkoutsList: React.FC = () => {
  const [currWeekList, setCurrWeekList] = useState<dateFormat[]>([])
  const [midDay, setMidDay] = useState<Dayjs>()
  dayjs.extend(isoWeek)

  const generateStartingList = () => {
    const currentDay = dayjs();
    const startingList = [dayjs()];

    for(let i = 1; i <= 2; i++) {
        startingList.push(currentDay.add(i, 'day'))
        startingList.unshift(currentDay.subtract(i, 'day'))
    }
    setCurrWeekList(
      startingList.map(item => {
        return {
          day: item.date(),
          month: item.month()+1,
          year: item.year(),
        }
      })
    )
    setMidDay(startingList[2])
  };
  
  useEffect(() => {
    generateStartingList();
  }, [])

  const slideUpHandler = () => {
    const currDay = dayjs(midDay);
    const listArr = [];

    for(let i = 3; i <= 7; i++) {
      listArr.unshift(currDay.subtract(i, 'day'))
    }

    setCurrWeekList(
      listArr.map(item => {
        return {
          day: item.date(),
          month: item.month()+1,
          year: item.year(),
        }
      })
    )
    setMidDay(listArr[2]);
    console.log(midDay?.format('DD.MM.YYYY'))
  }

  const slideDownHandler = () => {
    const currDay = dayjs(midDay);
    const listArr = [];

    for(let i = 3; i <= 7; i++) {
      listArr.push(currDay.add(i, 'day'))
    }

    setCurrWeekList(
      listArr.map(item => {
        return {
          day: item.date(),
          month: item.month()+1,
          year: item.year(),
        }
      })
    )
    setMidDay(listArr[2]);
  }

  return (
    <div>
      <ScrollButton onClickHandler={slideUpHandler} src={arrowUp} alt='Scroll up' />
      {currWeekList && currWeekList.map(item => <div key={item.day} id={`${item.day}-${item.month}-${item.year}`}>{item.day}.{item.month}.{item.year}</div>)}
      <ScrollButton onClickHandler={slideDownHandler} src={arrowDown} alt='Scroll down' />
    </div>
  )
}

export default WorkoutsList