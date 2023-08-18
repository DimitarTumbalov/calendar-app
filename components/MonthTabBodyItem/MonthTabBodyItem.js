import React from 'react';
import styles from './MonthTabBodyItem.module.scss';
import colors from '../../colors.module.scss';

const MonthTabBodyItem = ({index}) => {
  const lastInRow = (index + 1) % 7 == 0;
  return (
    <div className={styles.container} style={{
      borderRight: lastInRow ? 0 : `1px solid ${colors.colorBorder}`,
    }}>
      WeekDay
    </div>
  )
}

export default MonthTabBodyItem;