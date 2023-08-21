import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './MonthTab.module.scss';
import { MonthTabHeader, MonthTabItem } from '../..';
import { getEvents } from '@/services/eventService';
import { generateCalendarMonth } from '@/helpers/Utils';

const MonthTab = () => {
  const calendar = useSelector((state) => state.calendar);
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    const newCalendarData = generateCalendarMonth(calendar.year, calendar.month);

    getAllEvents().then(events => {
      // newCalendarData.forEach(item => {
      //   item.events = events.filter(e => {
      //     console.log(item.date.toDateString())
      //     return e.startTime == item.date
      //   });
      // })

      setCalendarData(newCalendarData);
    })
  }, [calendar])

  const getAllEvents = async() => {
    const res  = await getEvents();
    const data = await res.json();

    return data;
  }

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