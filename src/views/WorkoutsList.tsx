import dayjs, { Dayjs } from "dayjs"
import isoWeek from 'dayjs/plugin/isoWeek'
import { useEffect, useState } from 'react'
import arrowUp from '../assets/arrow-up.svg'
import arrowDown from '../assets/arrow-down.svg'
import ScrollButton from "components/molecules/ScrollDown/ScrollBtn"
import WorkoutItem from "components/organisms/WorkoutItem/WorkoutItem"

const WorkoutsList: React.FC = () => {
  const [currWeekList, setCurrWeekList] = useState<Dayjs[]>([])
  const [midDay, setMidDay] = useState<Dayjs>();

  const initializeFirebaseDB = (startDate: string, endDate: string, steps = 1) => {
    const dateArray = [];
    const currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
      dateArray.push(new Date(currentDate));
      // Use UTC date to prevent problems with time zones and DST
      currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }

    return dateArray;

  };

  
  const dates = initializeFirebaseDB('2022-01-01', '2029-12-31')
  console.log(dayjs(dates[0]).format('DD-MM-YYYY'))
  dayjs.extend(isoWeek)

  const generateStartingList = () => {
    const currentDay = dayjs();
    const startingList = [dayjs()];

    for(let i = 1; i <= 2; i++) {
        startingList.push(currentDay.add(i, 'day'))
        startingList.unshift(currentDay.subtract(i, 'day'))
    }
    startingList.map(item => console.log(item.format('MMM D')));
    setCurrWeekList(startingList)
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

    setCurrWeekList(listArr)
    setMidDay(listArr[2]);
  }

  const slideDownHandler = () => {
    const currDay = dayjs(midDay);
    const listArr = [];

    for(let i = 3; i <= 7; i++) {
      listArr.push(currDay.add(i, 'day'))
    }

    setCurrWeekList(listArr)
    setMidDay(listArr[2]);
  }

  return (
    <div>
      <ScrollButton onClickHandler={slideUpHandler} src={arrowUp} alt='Scroll up' />
      {currWeekList && currWeekList.map(date => <WorkoutItem key={date.format('DD-MM-YYYY')} id={date.format('DD-MM-YYYY')} date={date} />)}
      <ScrollButton onClickHandler={slideDownHandler} src={arrowDown} alt='Scroll down' />
    </div>
  )
}

export default WorkoutsList