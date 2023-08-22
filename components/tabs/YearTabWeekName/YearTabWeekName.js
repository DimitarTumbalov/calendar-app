import React from 'react';
import styles from './YearTabWeekName.module.scss';

const YearTabWeekName = ({day}) => {
  return (
    <div className={styles.container}>
      {day}
    </div>
  )
}

export default YearTabWeekName;