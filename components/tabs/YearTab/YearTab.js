import React from 'react';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { setCalendar, calendarEqualityFn } from '@/redux/features/calendarSlice';
import styles from './YearTab.module.scss';
import { YearTabCalendar } from '../..';
import { DATE_FORMAT, MONTHS, TABS } from '@/helpers/Constants';
import { setTab } from '@/redux/features/tabSlice';

const YearTab = () => {
  const dispatch = useDispatch();
  const calendar = useSelector(state => dayjs(state.calendar), calendarEqualityFn);

  const handleOnDateClick = (date) => {
    dispatch(setCalendar(dayjs(date, DATE_FORMAT).valueOf()));
    dispatch(setTab(TABS[0]));
  };

  return (
    <div className={styles.container}>
      {MONTHS.map((month, index) => 
        <YearTabCalendar 
          key={index} 
          month={index}
          calendar={dayjs([calendar.year(), index + 1])} 
          onClick={handleOnDateClick} />)}
    </div>
  )
}

export default YearTab;