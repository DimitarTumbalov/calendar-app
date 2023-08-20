import React from 'react';
import styles from './CreateEventModalHeader.module.scss';
import { useDispatch } from 'react-redux';
import { setModal } from '@/redux/features/modalSlice';

const CreateEventModalHeader = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModal(null));
  }

  return (
    <div className={styles.container}>
      <button
        onClick={() => handleClose()} 
        className={styles.closeBtn}>
        Close
      </button>
    </div>
  )
}

export default CreateEventModalHeader