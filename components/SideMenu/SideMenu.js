'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SideMenu.module.scss';
import { setModal } from '@/redux/features/modalSlice';
import { SmallCalendar, CreateIcon } from '..';
import { calendarEqualityFn, setCalendar } from '@/redux/features/calendarSlice';
import { setTab } from '@/redux/features/tabSlice';
import dayjs from 'dayjs';
import { DATE_FORMAT, TABS } from '@/helpers/Constants';

const SideMenu = () => {
  const dispatch = useDispatch();
  const calendar = useSelector(state => dayjs(state.calendar), calendarEqualityFn);
  const [localCalendar, setLocalCalendar] = useState(calendar);

  useEffect(() => {
    setLocalCalendar(calendar);
  }, [calendar])

  const handleCreateBtnClick = () => {
    dispatch(setCalendar(dayjs().valueOf()));
    dispatch(setModal('createEvent'));
  }

  const handleOnDateClick = (date) => {
    dispatch(setCalendar(dayjs(date, DATE_FORMAT).valueOf()));
    dispatch(setTab(TABS[0]));
  };

  const handleOnCalendarPrev = () => {
    setLocalCalendar(prev => {
      return prev.clone().subtract(1, 'month');
    })
  }

  const handleOnCalendarNext = () => {
    setLocalCalendar(prev => {
      return prev.clone().add(1, 'month');
    })
  }
  
  return (
    <div className={styles.container}>
      <button
        onClick={() => handleCreateBtnClick()} 
        className={styles.createBtn}>
        <CreateIcon height='2.25rem' className={styles.createBtnIcon}/>
        Create
      </button>

      <SmallCalendar 
        className={styles.calendar}
        onSelect={handleOnDateClick}
        onPrev={handleOnCalendarPrev}
        onNext={handleOnCalendarNext}
        calendar={localCalendar}/>
    </div>
  )
}

export default SideMenu