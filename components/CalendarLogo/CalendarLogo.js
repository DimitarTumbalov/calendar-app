import React from 'react';
import styles from './CalendarLogo.module.scss';
import { useDispatch } from 'react-redux';
import { CalendarIcon } from '..';
import { TABS } from '@/helpers/Constants';
import { setTab } from '@/redux/features/tabSlice';
import { setCalendar } from '@/redux/features/calendarSlice';
import dayjs from 'dayjs';

const CalendarLogo = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setCalendar(dayjs().valueOf()));
    dispatch(setTab(TABS[1]));
  }

  return (
    <div 
      onClick={() => handleOnClick()}
      className={styles.container}>
      <CalendarIcon height={32} />
      <p className={styles.text}>Calendar</p>
    </div>
  )
}

export default CalendarLogo