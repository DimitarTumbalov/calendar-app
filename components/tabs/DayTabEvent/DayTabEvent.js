import React from 'react';
import styles from './DayTabEvent.module.scss';
import { DATE_FORMAT, LABEL_COLORS, PRETTY_DATE_FORMAT } from '@/helpers/Constants';
import dayjs from 'dayjs';

const DayTabEvent = ({event}) => {
  const { title, startTime, endTime } = event;
  const startDate = dayjs(event.startDate, DATE_FORMAT).format(PRETTY_DATE_FORMAT)
  const endDate = dayjs(event.endDate, DATE_FORMAT).format(PRETTY_DATE_FORMAT)
  
  return (
    <div 
      className={styles.container}
      style={{
        background: LABEL_COLORS[event.colorId]
      }}>
      <div className={styles.title}>
        {title}
      </div>
      <p className={styles.duration}>
        {startDate} {startTime} - {endDate} {endTime}
      </p>
    </div>
  )
}

export default DayTabEvent;