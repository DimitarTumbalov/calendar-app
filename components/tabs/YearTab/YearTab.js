import React from 'react';
import styles from './YearTab.module.scss';
import { YearTabCalendar } from '../..';
import { MONTHS } from '@/helpers/Constants';

const YearTab = () => {

  return (
    <div className={styles.container}>
      {MONTHS.map((month, index) => 
        <YearTabCalendar 
          key={index} 
          month={index}
          calendar={{
            year: 2023,
            month: index
          }} />)}
    </div>
  )
}

export default YearTab;