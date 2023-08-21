import React, { useState } from 'react';
import styles from './TimePicker.module.scss';
import {TIME_OPTIONS} from '@/helpers/Constants';
import { TimePickerOption } from '..';

const TimePicker = ({value, onChange}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOnOptionClick = (option) => {
    onChange(option);
    setShowMenu(false);
  }

  return (
    <div className={styles.container}>
      <button
        onClick={() => setShowMenu(prev => !prev)}
        className={styles.btn}>
        {value}
      </button>

      {showMenu &&
        <div className={styles.optionsContainer}>
          {TIME_OPTIONS.map(o => <TimePickerOption key={o} option={o} onClick={handleOnOptionClick}/>)}
        </div>
      }
    </div>
  )
}

export default TimePicker;