import React from 'react';
import styles from './MonthTab.module.scss';
import { MonthTabHeader,  MonthTabBody} from '..';

const MonthTab = () => {
  return (
    <div className={styles.container}>
        <MonthTabHeader />
        <MonthTabBody />
    </div>
  )
}

export default MonthTab;