import React from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { calendarEqualityFn } from '@/redux/features/calendarSlice';
import styles from './YearTab.module.scss';
import { YearTabCalendar } from '../..';
import { MONTHS } from '@/helpers/Constants';

const YearTab = () => {
  const calendar = useSelector(state => dayjs(state.calendar), calendarEqualityFn);

  return (
    <div className={styles.container}>
      {MONTHS.map((month, index) => 
        <YearTabCalendar 
          key={index} 
          month={index}
          calendar={dayjs([calendar.year(), index + 1])} />)}
    </div>
  )
}

export default YearTab;