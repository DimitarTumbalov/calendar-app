import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './CreateEventModalHeader.module.scss';
import colors from '../../colors.module.scss';
import { setModal } from '@/redux/features/modalSlice';
import { CloseIcon } from '../icons';

const CreateEventModalHeader = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModal(null));
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Event
      </p>
      <button
        onClick={() => handleClose()} 
        className={styles.closeBtn}>
        <CloseIcon height={20} color={colors.colorText}/>
      </button>
    </div>
  )
}

export default CreateEventModalHeader