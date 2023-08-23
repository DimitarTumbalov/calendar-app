'use client';

import React from 'react';
import styles from './MonthTabHeaderItem.module.scss';

const MonthTabHeaderItem = ({item}) => {
  return (
    <div 
      className={styles.container}>
      {item}
    </div>
  )
}

export default MonthTabHeaderItem