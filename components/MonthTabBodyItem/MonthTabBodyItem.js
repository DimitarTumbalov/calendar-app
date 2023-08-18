import React from 'react';
import styles from './MonthTabBodyItem.module.scss';
import colors from '../../colors.module.scss';

const MonthTabBodyItem = ({index, item}) => {
  const lastInRow = (index + 1) % 7 == 0;
  return (
    <div className={styles.container} style={{
      borderRight: lastInRow ? 0 : `1px solid ${colors.colorBorder}`,
    }}>
      <p className={styles.title} style={{
        color: item.active ? colors.colorText : colors.colorTextSecondary
      }}>
        {item.date.getDate()}
      </p>
    </div>
  )
}

export default MonthTabBodyItem;