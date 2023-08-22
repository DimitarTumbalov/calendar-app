import React from 'react';

import styles from './SmallCalendarHeader.module.scss';
import colors from '@/colors.module.scss';
import { ArrowLeftIcon, ArrowRightIcon } from '..';
import { MONTHS } from '@/helpers/Constants';

const SmallCalendarHeader = ({onPrev, onNext, calendar}) => {

  return (
    <div className={styles.container}>
      <p className={styles.title}>
      {MONTHS[calendar.month()]} {calendar.year()}
      </p>
      <button 
        className={styles.btn}
        onClick={onPrev}>
        <ArrowLeftIcon height='1rem' color={colors.colorText}/>
      </button>
      <button 
        className={styles.btn}
        onClick={onNext}>
        <ArrowRightIcon height='1rem' color={colors.colorText} />
      </button>
    </div>
  )
}

export default SmallCalendarHeader;