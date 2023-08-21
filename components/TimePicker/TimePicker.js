import React from 'react';
import styles from './TimePicker.module.scss';
import {TIME_OPTIONS} from '@/helpers/Constants';

const TimePickerOption = ({option}) => <button>{option}</button>

const TimePicker = ({value, onChange}) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.btn}>
        {value.toFixed(2)}
      </button>

      <div className={styles.optionsContainer}>
        {TIME_OPTIONS.map(o => <TimePickerOption option={o} />)}
      </div>
    </div>
  )
}

export default TimePicker;