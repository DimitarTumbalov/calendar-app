import React from 'react';
import styles from './MonthTabHeaderItem.module.scss';
import colors from '../../colors.module.scss';

const MonthTabHeaderItem = ({item, index}) => {
  const lastInRow = index == 6;

  return (
    <div 
      className={styles.container}
      style={{
        borderRight: lastInRow ? 0 : `1px solid ${colors.colorBorder}`
      }}>
      {item}
    </div>
  )
}

export default MonthTabHeaderItem