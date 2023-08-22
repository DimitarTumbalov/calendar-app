import React, { useMemo } from 'react';
import styles from './YearTabCalendar.module.scss';
import { MONTHS, WEEK_DAYS_SHORT } from '@/helpers/Constants';
import { YearTabDate, YearTabWeekName } from '../..';
import { generateCalendarMonth } from '@/helpers/Utils';

const YearTabCalendar = ({calendar}) => {
  const monthData = useMemo(() => {
    return generateCalendarMonth(calendar.year(), calendar.month());
  }, [calendar]);

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {MONTHS[calendar.month()]}
      </p>
      <div className={styles.content}>
        {
          WEEK_DAYS_SHORT.map((day, index) => <YearTabWeekName key={index} day={day} />)
        }
      </div>
      <div className={styles.content}>
        {
          monthData.map((item, index) => <YearTabDate key={index} item={item}/>)
        }
      </div>
    </div>
  )
}

export default YearTabCalendar;