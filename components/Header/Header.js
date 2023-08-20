'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.scss';
import colors from '../../colors.module.scss';
import { setCalendar } from '@/redux/features/calendarSlice';
import { MONTHS } from '@/helpers/Constants';
import { CalendarLogo } from '..';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

const Header = () => {
  const calendar = useSelector((state) => state.calendar);
  const dispatch = useDispatch()

  const handleTodayClick = () => {
    const curDate = new Date();
    dispatch(setCalendar({
      year: curDate.getFullYear(),
      month: curDate.getMonth()
    }))
  }

  const handlePrevBtnClick = () => {
    let newCalendar;

    if(calendar.month == 0){
      newCalendar = {
        year: calendar.year - 1,
        month: 11,
      }
    }else{
      newCalendar = {
        month: calendar.month - 1
      }
    }

    dispatch(setCalendar(newCalendar));
  }

  const handleNextBtnClick = () => {
    let newCalendar;

    if(calendar.month == 11){
      newCalendar = {
        year: calendar.year + 1,
        month: 0,
      }
    }else{
      newCalendar = {
        month: calendar.month + 1
      }
    }

    dispatch(setCalendar(newCalendar));
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

      <p className={styles.calendarMonth}>{MONTHS[calendar.month]} {calendar.year}</p>
    </div>
  )
}

export default Header;