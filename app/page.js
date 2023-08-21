'use client';

import { useSelector } from 'react-redux';
import styles from './page.module.scss';
import { DayTab, WeekTab, MonthTab, YearTab, CreateEventModal, Header, SideMenu } from '@/components';
import { TABS } from '@/helpers/Constants';

export default function Home() { 
  const modal = useSelector(state => state.modal);
  const tab = useSelector(state => state.tab)
  
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <SideMenu />
        {tab == TABS[0] && <DayTab /> }
        {tab == TABS[1] && <WeekTab /> }
        {tab == TABS[2] && <MonthTab /> }
        {tab == TABS[3] && <YearTab /> }
      </div>
      <CreateEventModal show={modal == 'createEvent'}/>
    </main>
  )
}
