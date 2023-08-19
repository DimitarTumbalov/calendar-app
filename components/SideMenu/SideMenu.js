import React from 'react';
import styles from './SideMenu.module.scss';
import CreateIcon from '../CreateIcon/CreateIcon';

const SideMenu = () => {
  return (
    <div className={styles.container}>
      <button className={styles.createBtn}>
        <CreateIcon height='2.25rem' className={styles.createBtnIcon}/>
        Create
      </button>
    </div>
  )
}

export default SideMenu