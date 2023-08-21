'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import styles from './Header.module.scss';
import colors from '../../colors.module.scss';
import { setCalendar } from '@/redux/features/calendarSlice';
import { setTab } from '@/redux/features/tabSlice';
import { TABS, MONTHS } from '@/helpers/Constants';
import { CalendarLogo,  ArrowLeftIcon, ArrowRightIcon, DropDownIcon } from '..';

const Header = () => {
  const dispatch = useDispatch()
  const calendar = useSelector(state => state.calendar);
  const tab = useSelector(state => state.tab);
  const [showTabsMenu, setShowTabsMenu] = useState(false);

  const handleTodayClick = () => {
    const curDate = dayjs();
    dispatch(setCalendar({
      year: curDate.year(),
      month: curDate.month()
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

  const handleTabChange = (tab) => {
    dispatch(setTab(tab));
    setShowTabsMenu(false);
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

      <div className={styles.tabsContainer}>
        <button
          onClick={() => setShowTabsMenu(prev => !prev)}
          className={styles.tabsMenuBtn}>
          {tab}
          <DropDownIcon height='1rem' color={colors.colorText}/>
        </button>
        <div 
          style={{
            display: showTabsMenu ? 'flex' : 'none'
          }}
          className={`${styles.tabsMenu}`}>
          {
            TABS.map((tab, index) => <button key={index} onClick={() => handleTabChange(tab)}>{tab}</button>)
          }
        </div>
      </div>
    </div>
  )
}

export default Header;