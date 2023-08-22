import React, { useMemo } from 'react';
import dayjs from 'dayjs';

import styles from './DayTab.module.scss';
import { DayTabEvent } from '../..'
import { DATE_FORMAT, WEEK_DAY_FORMAT } from '@/helpers/Constants';
import { useSelector } from 'react-redux';
import { calendarEqualityFn } from '@/redux/features/calendarSlice';

const DayTab = () => {
  const calendar = useSelector(state => dayjs(state.calendar), calendarEqualityFn);
  const events = useSelector(state => state.events);

  const dateString = calendar.format(DATE_FORMAT);
  const title = calendar.format(WEEK_DAY_FORMAT);

  const dayEvents = useMemo(() => {
    return events.filter(e => e.startDate == dateString);
  }, [events, calendar])

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {title}
      </p>
      <div className={styles.eventsContainer}>
        {
          dayEvents.map((event, index) => <DayTabEvent key={index} event={event} />)
        }
      </div>
    </div>
  )
}

export default DayTab;