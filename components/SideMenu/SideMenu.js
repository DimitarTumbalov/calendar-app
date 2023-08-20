import React from 'react';
import styles from './SideMenu.module.scss';
import CreateIcon from '../CreateIcon/CreateIcon';
import { useDispatch } from 'react-redux';
import { setModal } from '@/redux/features/modalSlice';

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