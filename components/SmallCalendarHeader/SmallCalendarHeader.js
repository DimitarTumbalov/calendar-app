import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SmallCalendarHeader.module.scss';
import colors from '@/colors.module.scss';
import { ArrowLeftIcon, ArrowRightIcon } from '..';
import { MONTHS } from '@/helpers/Constants';
import { setSmallCalendar } from '@/redux/features/smallCalendarSlice';

const SmallCalendarHeader = () => {
  const smallCalendar = useSelector(state => state.smallCalendar)
  const dispatch = useDispatch();

  const handlePrevBtnClick = () => {
    let newCalendar;

    if(smallCalendar.month == 0){
      newCalendar = {
        year: smallCalendar.year - 1,
        month: 11,
      }
    }else{
      newCalendar = {
        month: smallCalendar.month - 1
      }
    }

    dispatch(setSmallCalendar(newCalendar));
  }

  const handleNextBtnClick = () => {
    let newCalendar;

    if(smallCalendar.month == 11){
      newCalendar = {
        year: smallCalendar.year + 1,
        month: 0,
      }
    }else{
      newCalendar = {
        month: smallCalendar.month + 1
      }
    }

    dispatch(setSmallCalendar(newCalendar));
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>
      {MONTHS[smallCalendar.month]} {smallCalendar.year}
      </p>
      <button 
        className={styles.btn}
        onClick={() => handlePrevBtnClick()}>
        <ArrowLeftIcon height='1rem' color={colors.colorText}/>
      </button>
      <button 
        className={styles.btn}
        onClick={() => handleNextBtnClick()}>
        <ArrowRightIcon height='1rem' color={colors.colorText} />
      </button>
    </div>
  )
}

export default SmallCalendarHeader;