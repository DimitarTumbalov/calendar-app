import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './EventModal.module.scss';
import colors from '@/colors.module.scss';
import { CloseIcon, TimeIcon, EndIcon, DescriptionIcon, DeleteIcon } from '..';
import { setSelectedEvent } from '@/redux/features/selectedEventSlice';
import { setModal } from '@/redux/features/modalSlice';
import { removeEvent } from '@/redux/features/eventsSlice';
import { DATE_FORMAT, LABEL_COLORS, PRETTY_DATE_FORMAT } from '@/helpers/Constants';
import { deleteEvent } from '@/services/eventService';
import dayjs from 'dayjs';

const EventModal = ({show}) => {
  const dispatch = useDispatch();
  const event = useSelector(state => state.selectedEvent);

  const handleOnDelete = () => {
    deleteEvent(event.id).then(res => res.json())
    .then(data => { 
      dispatch(removeEvent(data.eventId));
      handleOnClose();
    })
    .catch(err => console.log(err))
  }

  const handleOnClose = () => {
    dispatch(setModal(null));
    dispatch(setSelectedEvent(null));
  }

  if(!show || !event)
    return null;

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button
            onClick={() => handleOnDelete()}>
            <DeleteIcon
              height='1.3rem'
              color={colors.colorTextSecondary}/>
          </button>

          <button
            onClick={() => handleOnClose()}>
            <CloseIcon 
              height='1.3rem'
              color={colors.colorTextSecondary}/>
          </button>
        </div>

        <div className={styles.body}>

          <div className={styles.row}>
            <div 
              className={styles.labelColor}
              style={{
                background: LABEL_COLORS[event.colorId]
              }}
              >
            </div>
            <p className={styles.title}>
              {event?.title}
            </p>
          </div>

          <div className={styles.row}>
            <TimeIcon height='1.3rem' color={colors.colorTextSecondary}/>
            <p className={styles.time}>
            {dayjs(event?.startDate, DATE_FORMAT).format(PRETTY_DATE_FORMAT)} {event?.startTime}
            </p>
          </div>

          <div className={styles.row}>
            <EndIcon height='1.3rem' color={colors.colorTextSecondary}/>
            <p className={styles.time}>
              {dayjs(event?.endDate, DATE_FORMAT).format(PRETTY_DATE_FORMAT)} {event?.endTime}
            </p>
          </div>

          {event?.description && 
            <div className={styles.row}>
              <DescriptionIcon height='1.3rem' color={colors.colorTextSecondary}/>
              <div className={styles.description}>
                {event?.description}
              </div>
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default EventModal;