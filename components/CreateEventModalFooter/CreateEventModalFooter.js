import React from 'react';
import styles from './CreateEventModalFooter.module.scss';

const CreateEventModalFooter = () => {
  return (
    <div className={styles.container}>
      <button className={styles.saveBtn}>
        Save
      </button>
    </div>
  )
}

export default CreateEventModalFooter;