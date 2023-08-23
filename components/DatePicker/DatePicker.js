'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import styles from './DatePicker.module.scss';
import { SmallCalendar } from '..';
import { calendarEqualityFn } from '@/redux/features/calendarSlice';
import { PRETTY_DATE_FORMAT } from '@/helpers/Constants';
import { setPopup } from '@/redux/features/popupSlice';

const DatePicker = ({name, value, onChange}) => {
  const popupName = `datePicker-${name}`;
  const dispatch = useDispatch();
  const popup = useSelector(state => state.popup);
  const calendar = useSelector(state => dayjs(state.calendar), calendarEqualityFn);
  const [localCalendar, setLocalCalendar] = useState(calendar);

  const handleOnCalendarSelect = (date) => {
    onChange(date);
    dispatch(setPopup(null));
  }

  const handleOnCalendarPrev = () => {
    setLocalCalendar(prev => {
      return prev.clone().subtract(1, 'month');
    });
  }

  const handleOnCalendarNext = () => {
    setLocalCalendar(prev => {
      return prev.clone().add(1, 'month');
    });
  }

  return (
    <div className={styles.container}>
      <button
        onClick={() => dispatch(setPopup(popup == popupName ? null : popupName))} 
        className={styles.btn}>
        {dayjs(value).format(PRETTY_DATE_FORMAT)}
      </button>
      {
        popup == popupName && 
        <div className={styles.calendarContainer}>
          <SmallCalendar 
            calendar={localCalendar}
            onSelect={handleOnCalendarSelect}
            onPrev={handleOnCalendarPrev}
            onNext={handleOnCalendarNext}/>
        </div>
      }
    </div>
  )
}

export default DatePicker;