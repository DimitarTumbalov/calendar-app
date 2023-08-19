'use client';

import React from 'react';
import styles from './Header.module.scss';
import colors from '../../colors.module.scss';
import CalendarLogo from '../CalendarLogo/CalendarLogo';
import ArrowLeftIcon from '../ArrowLeftIcon/ArrowLeftIcon';
import ArrowRightIcon from '../ArrowRightIcon/ArrowRightIcon';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '@/redux/features/calendarSlice';
import { MONTHS_FULL } from '@/helpers/Constants';

const Header = () => {
  const calendar = useSelector((state) => state.calendar);
  const dispatch = useDispatch()

  const handleTodayClick = () => {
    const curDate = new Date();
    dispatch(set({
      year: curDate.getFullYear(),
      month: curDate.getMonth()
    }))
  }

  const handlePrevBtnClick = () => {
    let newCalendar;

    if(calendar.month == 1){
      newCalendar = {
        year: calendar.year - 1,
        month: 12,
      }
    }else{
      newCalendar = {
        month: calendar.month - 1
      }
    }

    dispatch(set(newCalendar));
  }

  const handleNextBtnClick = () => {
    let newCalendar;

    if(calendar.month == 12){
      newCalendar = {
        year: calendar.year + 1,
        month: 1,
      }
    }else{
      newCalendar = {
        month: calendar.month + 1
      }
    }

    dispatch(set(newCalendar));
  }

  return (
    <div className={styles.container}>
      <CalendarLogo />
      
      <button
        onClick={() => handleTodayClick()} 
        className={styles.todayBtn}>
        Today
      </button>

      <button
        className={`${styles.calendarNavBtn} ${styles.calendarLeftNavBtn}`} 
        onClick={() => handlePrevBtnClick()}
        >
        <ArrowLeftIcon 
          height={24} 
          color={colors.colorText} />
      </button>
      
      <button
        className={styles.calendarNavBtn} 
        onClick={() => handleNextBtnClick()}
        >
        <ArrowRightIcon 
          height={24} 
          color={colors.colorText} />
      </button>

      <p className={styles.calendarMonth}>{MONTHS_FULL[calendar.month]} {calendar.year}</p>
    </div>
  )
}

export default Header;