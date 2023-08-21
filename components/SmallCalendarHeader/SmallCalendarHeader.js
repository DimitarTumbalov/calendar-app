import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SmallCalendarHeader.module.scss';
import colors from '@/colors.module.scss';
import { ArrowLeftIcon, ArrowRightIcon } from '..';
import { MONTHS } from '@/helpers/Constants';
import { setSmallCalendar } from '@/redux/features/smallCalendarSlice';

const SmallCalendarHeader = ({onPrev, onNext}) => {
  const smallCalendar = useSelector(state => state.smallCalendar)
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.title}>
      {MONTHS[smallCalendar.month]} {smallCalendar.year}
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