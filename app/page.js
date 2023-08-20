'use client';

import { useSelector } from 'react-redux';
import styles from './page.module.scss';
import { MonthTab, CreateEventModal, Header, SideMenu } from '@/components';

export default function Home() { 
  const modal = useSelector(state => state.modal);
  
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <SideMenu />
        <MonthTab />
      </div>
      <CreateEventModal show={modal == 'createEvent'}/>
    </main>
  )
}
