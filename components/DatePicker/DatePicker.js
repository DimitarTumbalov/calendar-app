import React, { useState } from 'react';
import moment from 'moment/moment';

import styles from './DatePicker.module.scss';
import { SmallCalendar } from '..';
import { useSelector } from 'react-redux';

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
        {moment(value).format('dddd, MMMM Do, YYYY')}
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