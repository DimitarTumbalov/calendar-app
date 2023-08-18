import Header from '@/components/Header/Header'
import styles from './page.module.scss'
import SideMenu from '@/components/SideMenu/SideMenu'
import CalendarTab from '@/components/Calendar/CalendarTab'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <SideMenu />
        <CalendarTab />
      </div>
    </main>
  )
}
