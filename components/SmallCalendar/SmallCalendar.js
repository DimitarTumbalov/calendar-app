import React, { useMemo } from 'react';
import styles from './SmallCalendar.module.scss';
import { generateCalendarMonth } from '@/helpers/Utils';
import { SmallCalendarItem, SmallCalendarHeader, SmallCalendarWeekName } from '..';
import { WEEK_DAYS_SHORT } from '@/helpers/Constants';

const SmallCalendar = ({
  className, 
  onSelect,
  onPrev,
  onNext,
  calendar
}) => {
  const monthData = useMemo(() => generateCalendarMonth(calendar.year, calendar.month), [calendar]);

  return (
    <div className={`${className} ${styles.container}`}>
      <SmallCalendarHeader onPrev={onPrev} onNext={onNext} calendar={calendar}/>
      <div className={styles.weekNames}>
        {
          WEEK_DAYS_SHORT.map((day, index) => <SmallCalendarWeekName key={index} day={day} />)
        }
      </div>
      <div className={styles.content}>
        {
          monthData.map((item, index) => <SmallCalendarItem key={index} item={item} onClick={onSelect}/>)
        }
      </div>
    </div>
  )
}

export default SmallCalendar;