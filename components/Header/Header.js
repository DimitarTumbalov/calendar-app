'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import styles from './Header.module.scss';
import colors from '../../colors.module.scss';
import { setCalendar, decreaseDay, increaseDay, decreaseMonth, increaseMonth, decreaseYear, increaseYear, calendarEqualityFn } from '@/redux/features/calendarSlice';
import { setTab } from '@/redux/features/tabSlice';
import { TABS, MONTHS, SCREEN_BREAKPOINTS } from '@/helpers/Constants';
import { CalendarLogo,  ArrowLeftIcon, ArrowRightIcon, DropDownIcon } from '..';
import { useMediaQuery } from '@/hooks';

const Header = () => {
  const dispatch = useDispatch()
  const calendar = useSelector(state => dayjs(state.calendar), calendarEqualityFn);
  const tab = useSelector(state => state.tab);
  const [showTabsMenu, setShowTabsMenu] = useState(false);
  const screenMedium = useMediaQuery(SCREEN_BREAKPOINTS.MEDIUM);

  const handleTodayClick = () => {
    dispatch(setCalendar(dayjs().valueOf()));
  }

  const handlePrevBtnClick = () => {
    if(tab == TABS[0]){ // Day Tab
      dispatch(decreaseDay());
    }else if(tab == TABS[1]){ // Month Tab
      dispatch(decreaseMonth());
    }else { // Year Tab
      dispatch(decreaseYear());
    }
  }

  const handleNextBtnClick = () => {
    if(tab == TABS[0]){ // Day Tab
      dispatch(increaseDay());
    }else if(tab == TABS[1]){ // Month Tab
      dispatch(increaseMonth());
    }else { // Year Tab
      dispatch(increaseYear());
    }
  }

  const handleTabChange = (tab) => {
    dispatch(setTab(tab));
    setShowTabsMenu(false);
  }

  return (
    <div className={styles.container}>
      {!screenMedium && <CalendarLogo />}
      
      <div className={styles.conrolsContainer}>
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

        {tab == TABS[0] &&
        <p className={styles.calendarMonth}>{MONTHS[calendar.month()]} {calendar.date()}, {calendar.year()}</p>}

        {tab == TABS[1] &&
          <p className={styles.calendarMonth}>{MONTHS[calendar.month()]} {calendar.year()}</p>}

        {tab == TABS[2] &&
          <p className={styles.calendarMonth}>{calendar.year()}</p>}
      </div>

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