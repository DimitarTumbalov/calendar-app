'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SideMenu.module.scss';
import { setModal } from '@/redux/features/modalSlice';
import { SmallCalendar, CreateIcon } from '..';
import { setSmallCalendar } from '@/redux/features/smallCalendarSlice';

const SideMenu = () => {
  const dispatch = useDispatch();
  const smallCalendar = useSelector(state => state.smallCalendar);

  const handleCreateBtnClick = () => {
    dispatch(setModal('createEvent'));
  }

  const handleOnCalendarSelect = (date) => {
    console.log('handleCalendarSelect')
  }

  const handleOnCalendarPrev = () => {
    let newCalendar;

    if(smallCalendar.month == 0){
      newCalendar = {
        year: smallCalendar.year - 1,
        month: 11,
      }
    }else{
      newCalendar = { month: smallCalendar.month - 1 }
    }

    dispatch(setSmallCalendar(newCalendar));
  }

  const handleOnCalendarNext = () => {
    let newCalendar;

    if(smallCalendar.month == 11){
      newCalendar = {
        year: smallCalendar.year + 1,
        month: 0,
      }
    }else{
      newCalendar = { month: smallCalendar.month + 1 }
    }

    dispatch(setSmallCalendar(newCalendar));
  }
  
  return (
    <div className={styles.container}>
      <button
        onClick={() => handleCreateBtnClick()} 
        className={styles.createBtn}>
        <CreateIcon height='2.25rem' className={styles.createBtnIcon}/>
        Create
      </button>

      <SmallCalendar 
        className={styles.calendar}
        onSelect={handleOnCalendarSelect}
        onPrev={handleOnCalendarPrev}
        onNext={handleOnCalendarNext}
        calendar={smallCalendar}/>
    </div>
  )
}

export default SideMenu