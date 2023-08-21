'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.scss';
import colors from '../../colors.module.scss';
import { setCalendar } from '@/redux/features/calendarSlice';
import { setCalendarType } from '@/redux/features/calendarTypeSlice';
import { CALENDAR_TYPES, MONTHS } from '@/helpers/Constants';
import { CalendarLogo } from '..';
import { ArrowLeftIcon, ArrowRightIcon, DropDownIcon } from '../icons';

const Header = () => {
  const dispatch = useDispatch()
  const calendar = useSelector(state => state.calendar);
  const calendarType = useSelector(state => state.calendarType);
  const [showCalendarTypeMenu, setShowCalendarTypeMenu] = useState(false);

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
      newCalendar = { month: calendar.month - 1 }
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
      newCalendar = { month: calendar.month + 1 }
    }

    dispatch(setCalendar(newCalendar));
  }

  const handleCalendarTypeChange = (type) => {
    dispatch(setCalendarType(type));
    setShowCalendarTypeMenu(false);
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
        <ArrowLeftIcon height='1.5rem' color={colors.colorText} />
      </button>
      
      <button
        className={styles.calendarNavBtn} 
        onClick={() => handleNextBtnClick()}
        >
        <ArrowRightIcon height='1.5rem' color={colors.colorText} />
      </button>

      <p className={styles.calendarMonth}>{MONTHS[calendar.month]} {calendar.year}</p>

      <div className={styles.calendarTypeContainer}>
        <button
          onClick={() => setShowCalendarTypeMenu(prev => !prev)}
          className={styles.calendarTypeBtn}>
          {calendarType}
          <DropDownIcon height='1rem' color={colors.colorText}/>
        </button>
        <div 
          style={{
            display: showCalendarTypeMenu ? 'flex' : 'none'
          }}
          className={`${styles.calendarTypeMenu}`}>
          {
            CALENDAR_TYPES.map((type, index) => <button key={index} onClick={() => handleCalendarTypeChange(type)}>{type}</button>)
          }
        </div>
      </div>
    </div>
  )
}

export default Header;