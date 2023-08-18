import React from 'react';
import styles from './MonthTabBody.module.scss';
import MonthTabBodyItem from '../MonthTabBodyItem/MonthTabBodyItem';

const MonthTabBody = () => {
  return (
    <div className={styles.container}>
      {
        [...Array(35).keys()].map((e, index) => <MonthTabBodyItem key={index} index={index}/>)
      }
    </div>
  )
}

export default MonthTabBody