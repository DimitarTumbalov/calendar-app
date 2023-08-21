import React, { useState } from 'react';

import styles from './DatePicker.module.scss';
import { SmallCalendar } from '..';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { PRETTY_DATE_FORMAT } from '@/helpers/Constants';

const DatePicker = ({value, onChange}) => {
  const calendar = useSelector(state => state.calendar);
  const [localCalendar, setLocalCalendar] = useState(calendar);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleOnCalendarSelect = (date) => {
    onChange(date);
    setShowCalendar(false);
  }

  const handleOnCalendarPrev = () => {
    let newCalendar;

    if(localCalendar.month == 0){
      newCalendar = {
        ...localCalendar,
        year: localCalendar.year - 1,
        month: 11,
      }
    }else{
      newCalendar = { 
        ...localCalendar,
        month: localCalendar.month - 1
      }
    }

    setLocalCalendar(newCalendar);
  }

  const handleOnCalendarNext = () => {
    let newCalendar;

    if(localCalendar.month == 11){
      newCalendar = {
        ...localCalendar,
        year: localCalendar.year + 1,
        month: 0,
      }
    }else{
      newCalendar = { 
        ...localCalendar,
        month: localCalendar.month + 1 
      }
    }

    setLocalCalendar(newCalendar);
  }

  return (
    <div className={styles.container}>
      <button
        onClick={() => setShowCalendar(prev => !prev)} 
        className={styles.btn}>
        {dayjs(value).format(PRETTY_DATE_FORMAT)}
      </button>
      {
        showCalendar && 
        <div className={styles.calendarContainer}>
          <SmallCalendar 
            onSelect={handleOnCalendarSelect}
            calendar={localCalendar}
            onPrev={handleOnCalendarPrev}
            onNext={handleOnCalendarNext}/>
        </div>
      }
    </div>
  )
}

export default DatePicker;