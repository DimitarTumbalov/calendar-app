import React from 'react';
import styles from './CreateEventModalFooter.module.scss';

const CreateEventModalFooter = ({onSave}) => {
  return (
    <div className={styles.container}>
      <button 
        className={styles.saveBtn}
        onClick={onSave}>
        Save
      </button>
    </div>
  )
}

export default CreateEventModalFooter;