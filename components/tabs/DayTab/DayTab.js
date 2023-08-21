import React from 'react';

import styles from './DayTab.module.scss';
import { DayTabItem } from '../..'

const hours = Array.from({length: 24}, (value,index) => index)

const DayTab = () => {
  
  return (
    <div className={styles.container}>
      {hours.map(hour => <DayTabItem key={hour} item={hour} />)}
    </div>
  )
}

export default DayTab;