import Header from '@/components/Header/Header';
import styles from './page.module.scss';
import SideMenu from '@/components/SideMenu/SideMenu';
import MonthTab from '@/components/MonthTab/MonthTab';
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'] })


export default function Home() {  
  return (
    <main className={`${styles.main} ${roboto.className}`}>
      <Header />
      <div className={styles.content}>
        <SideMenu />
        <MonthTab />
      </div>
    </main>
  )
}
