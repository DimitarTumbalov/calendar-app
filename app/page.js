'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './page.module.scss';
import { DayTab, MonthTab, YearTab, CreateEventModal, Header, SideMenu, EventModal } from '@/components';
import { TABS } from '@/helpers/Constants';
import { setEvents } from '@/redux/features/eventsSlice';
import { getEvents } from '@/services/eventService';

export default function Home() { 
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const tab = useSelector(state => state.tab);

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
        <SideMenu />
        {tab == TABS[0] && <DayTab /> }
        {tab == TABS[1] && <MonthTab /> }
        {tab == TABS[2] && <YearTab /> }
      </div>
      <EventModal show={modal == 'event'}/>
      <CreateEventModal show={modal == 'createEvent'}/>
    </main>
  )
}
