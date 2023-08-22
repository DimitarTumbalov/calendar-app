import React from 'react';

import styles from './DayTab.module.scss';
import { DayTabEvent } from '../..'
import { DATE_FORMAT, PRETTY_DATE_FORMAT } from '@/helpers/Constants';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const DayTab = () => {
  const calendar = useSelector(state => state.calendar);
  const events = useSelector(state => state.events);
  const date = dayjs([calendar.year, calendar.month + 1, calendar.day])
  const dateString = date.format(DATE_FORMAT);
  const title = date.format(PRETTY_DATE_FORMAT);

  const dayEvents = events.filter(e => e.startDate == dateString)

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {title}
      </p>
      <div className={styles.eventsContainer}>
        {
          events.map((event, index) => <DayTabEvent key={index} event={event} />)
        }
      </div>
    </div>
  )
}

export default DayTab;