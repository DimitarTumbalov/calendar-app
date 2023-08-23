'use client';
import React from 'react';
import dayjs from 'dayjs';

import styles from './MonthTabItem.module.scss';
import colors from '@/colors.module.scss';
import { MONTHS_SHORT, DATE_FORMAT } from '@/helpers/Constants';
import { MonthTabItemEvent } from '../..'

const MonthTabBodyItem = ({item, onClick, index}) => {
  const {date, simpleDate, isActive, isToday, isFirst, events} = item;
  const isFirstRow = index < 7;
  const activeClass = isActive ? styles.active : styles.inactive;
  const colorsStyle = isToday ? styles.today : activeClass;
  const monthIndex = isFirst && dayjs(date, DATE_FORMAT).month();

  return (
    <div 
      className={styles.container}
      style={{
        borderTop: isFirstRow ? 0 : `1px solid ${colors.colorBorder}`,
      }}
      >
      <div 
        onClick={() => onClick(date)}
        className={`${styles.title} ${colorsStyle} ${isFirst && styles.first}`}>
        {isFirst && `${MONTHS_SHORT[monthIndex]} `}
        {simpleDate}
      </div>

      <div className={styles.eventsContainer}>
        {events.slice(0, 2).map((event, index) => <MonthTabItemEvent key={index} event={event} />)}
      </div>

      {events.length > 2 &&
        <p 
          onClick={() => onClick(date)}
          className={styles.eventsMore}>
          {events.length - 2} more
        </p>
      }
    </div>
  )
}

export default MonthTabBodyItem;