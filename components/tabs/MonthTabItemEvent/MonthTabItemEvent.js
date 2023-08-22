import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './MonthTabItemEvent.module.scss';
import { LABEL_COLORS } from '@/helpers/Constants'
import { setModal } from '@/redux/features/modalSlice';
import { setSelectedEvent } from '@/redux/features/selectedEventSlice';

const MonthTabItemEvent = ({event}) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setModal('event'));
    dispatch(setSelectedEvent(event));
  };

  return (
    <div 
      onClick={() => handleOnClick()}
      className={styles.container}
      style={{
        background: LABEL_COLORS[event.colorId]
      }}>
      {event.title}
    </div>
  )
}

export default MonthTabItemEvent;