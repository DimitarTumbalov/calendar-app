import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './EventModal.module.scss';
import colors from '@/colors.module.scss';
import { CloseIcon, EditIcon, TimeIcon, EndIcon, DescriptionIcon } from '..';
import { setSelectedEvent } from '@/redux/features/selectedEventSlice';
import { setModal } from '@/redux/features/modalSlice';
import { LABEL_COLORS } from '@/helpers/Constants';

const EventModal = ({show}) => {
  const dispatch = useDispatch();
  const event = useSelector(state => state.selectedEvent);

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
            onClick={() => {}}>
            <EditIcon 
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
              {event?.startDate} {event?.startTime}
            </p>
          </div>

          <div className={styles.row}>
            <EndIcon height='1.3rem' color={colors.colorTextSecondary}/>
            <p className={styles.time}>
              {event?.startDate} {event?.startTime}
            </p>
          </div>

          {event?.description && 
            <div className={styles.row}>
              <DescriptionIcon height='1.3rem' color={colors.colorTextSecondary}/>
              <p className={styles.description}>
                {event?.description}
              </p>
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default EventModal;