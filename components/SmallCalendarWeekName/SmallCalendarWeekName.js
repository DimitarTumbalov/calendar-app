import React from 'react';
import styles from './SmallCalendarWeekName.module.scss';

const SmallCalendarWeekName = ({day}) => {

  return (
    <div className={styles.container}>
      {day}
    </div>
  )
}

export default SmallCalendarWeekName;