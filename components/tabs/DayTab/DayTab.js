import React from 'react';

import styles from './DayTab.module.scss';
import { DayTabItem } from '../..'
import { HOUR_OPTIONS } from '@/helpers/Constants';

const DayTab = () => {
  
  return (
    <div className={styles.container}>
      {HOUR_OPTIONS.map(hour => <DayTabItem key={hour} item={hour} />)}
    </div>
  )
}

export default DayTab;