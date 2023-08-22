'use client';

import { useDispatch, useSelector } from 'react-redux';
import styles from './page.module.scss';
import { DayTab, MonthTab, YearTab, CreateEventModal, Header, SideMenu } from '@/components';
import { TABS } from '@/helpers/Constants';
import { useEffect } from 'react';
import { setSmallCalendar } from '@/redux/features/smallCalendarSlice';
import { setEvents } from '@/redux/features/eventsSlice';
import { getEvents } from '@/services/eventService';

export default function Home() { 
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const tab = useSelector(state => state.tab);
  const calendar = useSelector(state => state.calendar);

  useEffect(() => {
    getEvents().then(res => res.json())
      .then(data => {
        dispatch(setEvents(data))
      })
      .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    dispatch(setSmallCalendar(calendar));
  }, [calendar])
  
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <SideMenu />
        {tab == TABS[0] && <DayTab /> }
        {tab == TABS[1] && <MonthTab /> }
        {tab == TABS[2] && <YearTab /> }
      </div>
      <CreateEventModal show={modal == 'createEvent'}/>
    </main>
  )
}
