import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './DayTabEvent.module.scss';
import { DATE_FORMAT, LABEL_COLORS, PRETTY_DATE_FORMAT } from '@/helpers/Constants';
import dayjs from 'dayjs';
import { setModal } from '@/redux/features/modalSlice';
import { setSelectedEvent } from '@/redux/features/selectedEventSlice';

const DayTabEvent = ({event}) => {
  const { title, startTime, endTime } = event;
  const startDate = dayjs(event.startDate, DATE_FORMAT).format(PRETTY_DATE_FORMAT)
  const endDate = dayjs(event.endDate, DATE_FORMAT).format(PRETTY_DATE_FORMAT)
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
      <div className={styles.title}>
        {title}
      </div>
      <p className={styles.duration}>
        {startDate} {startTime} - {endDate} {endTime}
      </p>
    </div>
  )
}

export default DayTabEvent;