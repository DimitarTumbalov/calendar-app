'use client';
import React from 'react';
import dayjs from 'dayjs';

import styles from './MonthTabItem.module.scss';
import colors from '@/colors.module.scss';
import { MONTHS_SHORT, DATE_FORMAT, SCREEN_BREAKPOINTS } from '@/helpers/Constants';
import { MonthTabItemEvent } from '../..'
import { useMediaQuery } from '@/hooks';

const MonthTabItem = ({item, index, onClick, onDateClick, onEventClick}) => {
  const {date, simpleDate, isActive, isToday, isFirst, events} = item;
  const isFirstRow = index < 7;
  const isFirstInRow = index % 7 == 0;
  const activeClass = isActive ? styles.active : styles.inactive;
  const colorsStyle = isToday ? styles.today : activeClass;
  const monthIndex = isFirst && dayjs(date, DATE_FORMAT).month();
  const screenMedium = useMediaQuery(SCREEN_BREAKPOINTS.MEDIUM);

  return (
    <div 
      onClick={(e) => onClick(e, date)}
      className={styles.container}
      style={{
        borderTop: isFirstRow ? 0 : `1px solid ${colors.colorBorder}`,
        borderLeft: isFirstInRow && screenMedium ? 0 : `1px solid ${colors.colorBorder}`

      }}
      >
      <div 
        onClick={(e) => onDateClick(e, date)}
        className={`${styles.title} ${colorsStyle} ${isFirst && styles.first}`}>
        {isFirst && `${MONTHS_SHORT[monthIndex]} `}
        {simpleDate}
      </div>

      <div className={styles.eventsContainer}>
        {events.slice(0, 2).map((event, index) => <MonthTabItemEvent key={index} event={event} onClick={onEventClick}/>)}
      </div>

      {events.length > 2 &&
        <p 
          onClick={(e) => onDateClick(e, date)}
          className={styles.eventsMore}>
          {events.length - 2} more
        </p>
      }
    </div>
  )
}

export default MonthTabItem;