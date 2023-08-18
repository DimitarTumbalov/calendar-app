'use client';

import React from 'react';
import styles from './MonthTabBody.module.scss';
import MonthTabBodyItem from '../MonthTabBodyItem/MonthTabBodyItem';
import { generateCalendarMonth } from '@/helpers/Utils';

const MonthTabBody = () => {
  const calendar = generateCalendarMonth(2023, 7);

  return (
    <div className={styles.container}>
      {
        calendar.map((item, index) => <MonthTabBodyItem key={index} index={index} item={item}/>)
      }
    </div>
  )
}

export default MonthTabBody