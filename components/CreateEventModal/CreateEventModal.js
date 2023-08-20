import React from 'react';
import styles from './CreateEventModal.module.scss';
import CreateEventModalHeader from '../CreateEventModalHeader/CreateEventModalHeader';
import CreateEventModalBody from '../CreateEventModalBody/CreateEventModalBody';
import CreateEventModalFooter from '../CreateEventModalFooter/CreateEventModalFooter';

const CreateEventModal = ({show}) => {
  if(!show)
    return null;

  return (
    <div className={styles.blur}>
      <div className={styles.modal}>
        <CreateEventModalHeader/>
        <CreateEventModalBody />
        <CreateEventModalFooter />
      </div>
    </div>
  )
}

export default CreateEventModal