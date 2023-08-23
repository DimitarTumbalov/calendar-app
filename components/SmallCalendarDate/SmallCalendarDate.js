import React from 'react';
import styles from './SmallCalendarDate.module.scss';

const SmallCalendarDate = ({item, onClick}) => {
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

export default SmallCalendarDate;