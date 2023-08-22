import React from 'react';
import styles from './MonthTabItemEvent.module.scss';
import { LABEL_COLORS } from '@/helpers/Constants'

const MonthTabItemEvent = ({event}) => {
  return (
    <div 
      className={styles.container}
      style={{
        background: LABEL_COLORS[event.colorId]
      }}>
      {event.title}
    </div>
  )
}

export default MonthTabItemEvent;