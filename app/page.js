'use client';

import Header from '@/components/Header/Header';
import styles from './page.module.scss';
import SideMenu from '@/components/SideMenu/SideMenu';
import MonthTab from '@/components/MonthTab/MonthTab';
import { Roboto_Flex } from 'next/font/google'
import CreateEventModal from '@/components/CreateEventModal/CreateEventModal';
import { useSelector } from 'react-redux';

const roboto = Roboto_Flex({ subsets: ['latin'] })

export default function Home() { 
  const modal = useSelector(state => state.modal);
  
  return (
    <main className={`${styles.main} ${roboto.className}`}>
      <Header />
      <div className={styles.content}>
        <SideMenu />
        <MonthTab />
      </div>
      <CreateEventModal show={modal == 'createEvent'}/>
    </main>
  )
}
