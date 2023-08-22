import React, { useState } from 'react';
import styles from './TimePicker.module.scss';
import {TIME_OPTIONS} from '@/helpers/Constants';
import { TimePickerOption } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '@/redux/features/popupSlice';

const TimePicker = ({name, value, onChange}) => {
  const popupName = `timePicker-${name}`;
  const dispatch = useDispatch();
  const popup = useSelector(state => state.popup)

  const handleOnOptionClick = (option) => {
    onChange(option);
    dispatch(setPopup(null));
  }

  return (
    <div className={styles.container}>
      <button
        onClick={() => dispatch(setPopup(popup == popupName ? null : popupName))}
        className={styles.btn}>
        {value}
      </button>

      {popup == popupName &&
        <div className={styles.optionsContainer}>
          {TIME_OPTIONS.map(o => <TimePickerOption key={o} option={o} onClick={handleOnOptionClick}/>)}
        </div>
      }
    </div>
  )
}

export default TimePicker;