import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './SmallCalendar.module.scss';
import { generateCalendarMonth } from '@/helpers/Utils';
import { SmallCalendarItem, SmallCalendarHeader, SmallCalendarWeekName } from '..';
import { WEEK_DAYS_SHORT } from '@/helpers/Constants';

const SmallCalendar = ({className}) => {
  const calendar = useSelector(state => state.calendar);
  const smallCalendar = useSelector(state => state.smallCalendar);
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    setCalendarData(generateCalendarMonth(smallCalendar.year, smallCalendar.month));
  }, [smallCalendar])

  //Match changes to the main calendar
  useEffect(() => {
    setCalendarData(generateCalendarMonth(calendar.year, calendar.month));
  }, [calendar])

  return (
    <div className={`${className} ${styles.container}`}>
      <SmallCalendarHeader />
      <div className={styles.weekNames}>
        {
          WEEK_DAYS_SHORT.map((day, index) => <SmallCalendarWeekName key={index} day={day} />)
        }
      </div>
      <div className={styles.content}>
        {
          calendarData.map((item, index) => <SmallCalendarItem key={index} item={item} />)
        }
      </div>
    </div>
  )
}

export default SmallCalendar;