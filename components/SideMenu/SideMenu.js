import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './SideMenu.module.scss';
import { setModal } from '@/redux/features/modalSlice';
import { CreateIcon } from '../icons';

const SideMenu = () => {
  const dispatch = useDispatch();

  const handleCreateBtnClick = () => {
    dispatch(setModal('createEvent'));
  }
  
  return (
    <div className={styles.container}>
      <button
        onClick={() => handleCreateBtnClick()} 
        className={styles.createBtn}>
        <CreateIcon height='2.25rem' className={styles.createBtnIcon}/>
        Create
      </button>
    </div>
  )
}

export default SideMenu