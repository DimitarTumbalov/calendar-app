import React from 'react';
import styles from './YearTabDate.module.scss';

const YearTabDate = ({item}) => {
  const { simpleDate, isActive, isToday } = item;
  const activeClass = isActive ? styles.active : styles.inactive;
  const colorsStyle = isToday ? styles.today : activeClass;

  return (
    <div 
      onClick={() => onClick(item.date)}
      className={`${styles.container} ${colorsStyle}`}>
      {simpleDate}
    </div>
  )
}

export default YearTabDate;