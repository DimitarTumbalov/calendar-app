import React, { useState } from 'react';

import styles from './DatePicker.module.scss';
import { SmallCalendar } from '..';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { PRETTY_DATE_FORMAT } from '@/helpers/Constants';
import { setPopup } from '@/redux/features/popupSlice';

const DatePicker = ({name, value, onChange}) => {
  const popupName = `datePicker-${name}`;
  const dispatch = useDispatch();
  const popup = useSelector(state => state.popup);
  const calendar = useSelector(state => state.calendar);
  const [localCalendar, setLocalCalendar] = useState(calendar);

  const handleOnCalendarSelect = (date) => {
    onChange(date);
    dispatch(setPopup(null));
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
        onClick={() => dispatch(setPopup(popup == popupName ? null : popupName))} 
        className={styles.btn}>
        {dayjs(value).format(PRETTY_DATE_FORMAT)}
      </button>
      {
        popup == popupName && 
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