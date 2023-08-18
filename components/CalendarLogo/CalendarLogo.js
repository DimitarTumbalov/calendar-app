import React from 'react';
import styles from './CalendarLogo.module.scss';
import CalendarIcon from '../CalendarIcon/CalendarIcon';

const CalendarLogo = () => {
  return (
    <div className={styles.container}>
      <CalendarIcon height={32} />
      <p className={styles.text}>Calendar</p>
    </div>
  )
}

export default CalendarLogo