import Header from '@/components/Header/Header';
import styles from './page.module.scss';
import SideMenu from '@/components/SideMenu/SideMenu';
import MonthTab from '@/components/MonthTab/MonthTab';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <SideMenu />
        <MonthTab />
      </div>
    </main>
  )
}
