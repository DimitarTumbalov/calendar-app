import React from 'react';
import styles from './SmallCalendarItem.module.scss';

const SmallCalendarItem = ({item}) => {
  const { simpleDate, isActive, isToday } = item;
  const activeClass = isActive ? styles.active : styles.inactive;
  const colorsStyle = isToday ? styles.today : activeClass;

  return (
    <div className={`${styles.container} ${colorsStyle}`}>
      {simpleDate}
    </div>
  )
}

export default SmallCalendarItem;