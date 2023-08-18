import React from 'react';
import styles from './Header.module.scss';
import colors from '../../colors.module.scss';
import CalendarLogo from '../CalendarLogo/CalendarLogo';
import ArrowLeftIcon from '../ArrowLeftIcon/ArrowLeftIcon';
import ArrowRightIcon from '../ArrowRightIcon/ArrowRightIcon';

const Header = () => {
  return (
    <div className={styles.container}>
      <CalendarLogo />
      <button className={styles.todayBtn}>
        Today
      </button>
      <ArrowLeftIcon 
        className={`${styles.calendarNavBtn} ${styles.calendarLeftNavBtn}`} 
        height={24} 
        color={colors.colorText} />
      <ArrowRightIcon 
        className={styles.calendarNavBtn} 
        height={24} 
        color={colors.colorText} />
      <p className={styles.calendarMonth}>August 2023</p>
    </div>
  )
}

export default Header;