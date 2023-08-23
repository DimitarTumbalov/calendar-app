'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './page.module.scss';
import { DayTab, MonthTab, YearTab, EventFormModal, Header, SideMenu, EventModal } from '@/components';
import { SCREEN_BREAKPOINTS, TABS } from '@/helpers/Constants';
import { setEvents } from '@/redux/features/eventsSlice';
import { getEvents } from '@/services/eventService';
import { useMediaQuery } from '@/hooks';

export default function Home() { 
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const tab = useSelector(state => state.tab);
  const screenMedium = useMediaQuery(SCREEN_BREAKPOINTS.MEDIUM);

  useEffect(() => {
    getEvents().then(res => res.json())
      .then(data => {
        dispatch(setEvents(data))
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        {!screenMedium && <SideMenu />}
        {tab == TABS[0] && <DayTab /> }
        {tab == TABS[1] && <MonthTab /> }
        {tab == TABS[2] && <YearTab /> }
      </div>
      <EventModal show={modal == 'event'}/>
      <EventFormModal show={modal == 'createEvent'}/>
    </main>
  )
}
