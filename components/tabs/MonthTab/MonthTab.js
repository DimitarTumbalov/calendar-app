import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './MonthTab.module.scss';
import { MonthTabHeader, MonthTabItem } from '../..';
import { generateCalendarMonth } from '@/helpers/Utils';

const MonthTab = () => {
  const events = useSelector(state => state.events);
  const calendar = useSelector((state) => state.calendar);

  const calendarData = useMemo(() => {
    const newCalendarData = generateCalendarMonth(calendar.year, calendar.month)

    //Add events to dates
    newCalendarData.forEach(item => {
      item.events = events.filter(e => e.startDate == item.date);
    })

    return newCalendarData
  }, [events, calendar]);

  // useEffect(() => {
  //   const newCalendarData = generateCalendarMonth(calendar.year, calendar.month);
  //   setCalendarData(newCalendarData);
  // }, [calendar])

  return (
    <div className={styles.container}>
        <MonthTabHeader />
        <div className={styles.body}>
          {
            calendarData.map((item, index) => <MonthTabItem key={index} index={index} item={item}/>)
          }
        </div>
    </div>
  )
}

export default MonthTab;