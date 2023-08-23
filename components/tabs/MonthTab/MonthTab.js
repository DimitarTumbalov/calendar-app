'use client';
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './MonthTab.module.scss';
import { MonthTabHeader, MonthTabItem } from '../..';
import { generateCalendarMonth } from '@/helpers/Utils';
import dayjs from 'dayjs';
import { DATE_FORMAT, TABS } from '@/helpers/Constants';
import { calendarEqualityFn, setCalendar } from '@/redux/features/calendarSlice';
import { setTab } from '@/redux/features/tabSlice';
import { setModal } from '@/redux/features/modalSlice';
import { setSelectedEvent } from '@/redux/features/selectedEventSlice';

const MonthTab = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);
  const calendar = useSelector(state => dayjs(state.calendar), calendarEqualityFn);

  const calendarData = useMemo(() => {
    const newCalendarData = generateCalendarMonth(calendar.year(), calendar.month())

    //Add events to dates
    newCalendarData.forEach(item => {
      item.events = events.filter(e => e.startDate == item.date);
    })

    return newCalendarData
  }, [events, calendar]);

  const handleOnClick = (e, date) => {
    e.stopPropagation();
    dispatch(setCalendar(dayjs(date, DATE_FORMAT).valueOf()));
    dispatch(setModal('createEvent'));
  } 

  const handleOnDateClick = (e, date) => {
    e.stopPropagation();
    dispatch(setCalendar(dayjs(date, DATE_FORMAT).valueOf()));
    dispatch(setTab(TABS[0]));
  };

  const handleOnEventClick = (e, event) => {
    e.stopPropagation();
    dispatch(setModal('event'));
    dispatch(setSelectedEvent(event));
  };

  return (
    <div className={styles.container}>
      <MonthTabHeader />
      <div className={styles.body}>
        {
          calendarData.map((item, index) => 
            <MonthTabItem 
              key={index} 
              item={item} 
              index={index}
              onClick={handleOnClick}
              onDateClick={handleOnDateClick}
              onEventClick={handleOnEventClick}/>)
        }
      </div>
    </div>
  )
}

export default MonthTab;