import React from 'react';
import styles from './MonthTabBodyItem.module.scss';
import colors from '../../colors.module.scss';

const MonthTabBodyItem = ({index, item}) => {
  const {date, simpleDate, isActive, isToday, isFirst, events} = item;
  const lastInRow = (index + 1) % 7 == 0;

  const activeClass = isActive ? styles.active : styles.inactive;
  const colorsStyle = isToday ? styles.today : activeClass;

  return (
    <div className={styles.container} style={{
      borderRight: lastInRow ? 0 : `1px solid ${colors.colorBorder}`,
    }}>
      <div className={`${styles.title} ${colorsStyle} ${isFirst && styles.first}`}>
        {simpleDate}
      </div>
    </div>
  )
}

export default MonthTabBodyItem;