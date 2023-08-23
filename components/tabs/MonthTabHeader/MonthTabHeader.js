'use client';
import React from 'react';
import styles from './MonthTabHeader.module.scss';
import { WEEK_DAYS } from '@/helpers/Constants';
import { MonthTabHeaderItem } from '../../';

const MonthTabHeader = () => {
  return (
    <div className={styles.container}>
      {
        WEEK_DAYS.map((day, index) => <MonthTabHeaderItem key={index} item={day} />)
      }
    </div>
  )
}

export default MonthTabHeader