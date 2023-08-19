'use client';

import React, { useEffect, useState } from 'react';
import styles from './MonthTabBody.module.scss';
import MonthTabBodyItem from '../MonthTabBodyItem/MonthTabBodyItem';
import { generateCalendarMonth } from '@/helpers/Utils';
import { useSelector } from 'react-redux';

const MonthTabBody = () => {
  const calendar = useSelector((state) => state.calendar);
  const [calendarData, setCalendarData] = useState(generateCalendarMonth(calendar.year, calendar.month));

  useEffect(() => {
    setCalendarData(generateCalendarMonth(calendar.year, calendar.month));
  }, [calendar])

  return (
    <div className={styles.container}>
      {
        calendarData.map((item, index) => <MonthTabBodyItem key={index} index={index} item={item}/>)
      }
    </div>
  )
}

export default MonthTabBody