import React from 'react';
import styles from './DayTabItem.module.scss';

const DayTabItem = ({item}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {item}
      </div>

      <div className={styles.content}>
      </div>
    </div>
  )
}

export default DayTabItem;