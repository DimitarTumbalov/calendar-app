import React from 'react';
import styles from './MonthTabItem.module.scss';
import { MONTHS_SHORT } from '@/helpers/Constants';

const MonthTabBodyItem = ({index, item}) => {
  const {date, simpleDate, isActive, isToday, isFirst, events} = item;
  const isLastInRow = (index + 1) % 7 == 0;
  const activeClass = isActive ? styles.active : styles.inactive;
  const colorsStyle = isToday ? styles.today : activeClass;

  return (
    <div className={`${styles.container} ${!isLastInRow && styles.rightBorder}`}>
      <div className={`${styles.title} ${colorsStyle} ${isFirst && styles.first}`}>
        {isFirst && `${MONTHS_SHORT[date.getMonth()]} `}
        {simpleDate}
      </div>
    </div>
  )
}

export default MonthTabBodyItem;