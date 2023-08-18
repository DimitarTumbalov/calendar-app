import React from 'react';
import styles from './MonthTab.module.scss';
import MonthTabHeader from '../MonthTabHeader/MonthTabHeader';
import MonthTabBody from '../MonthTabBody/MonthTabBody';

const MonthTab = () => {
  return (
    <div className={styles.container}>
        <MonthTabHeader />
        <MonthTabBody />
    </div>
  )
}

export default MonthTab;