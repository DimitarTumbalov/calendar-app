import React from 'react';
import styles from './CreateEventModalBody.module.scss';
import colors from '../../colors.module.scss';
import TimeIcon from '../TimeIcon/TimeIcon';
import DescriptionIcon from '../DescriptionIcon/DescriptionIcon';
import LabelIcon from '../LabelIcon/LabelIcon';

const CreateEventModalBody = () => {
  return (
    <div className={styles.container}>
      <input 
        placeholder="Title"
        className={styles.titleInput}>
      </input>

      <div className={styles.row}>
        <TimeIcon 
          className={styles.icon}
          height='1.25rem'
          color={colors.colorTextSecondary}/>
        <input 
          type="datetime-local"
          className={styles.dateTimePicker} />
        <input 
          type="datetime-local"
          className={styles.dateTimePicker} />
      </div>

      <div className={styles.row}>
        <DescriptionIcon 
          className={styles.icon}
          height='1.25rem'
          color={colors.colorTextSecondary}/>
        <textarea 
          className={styles.descriptionTA}
          rows={5}
          placeholder="Description">
        </textarea>
      </div>

      <div className={styles.rowColorOptions}>
        <LabelIcon
          className={styles.icon}
          height='1.25rem'
          color={colors.colorTextSecondary}/>
        <div className={styles.colorOption}/>
      </div>
    </div>
  )
}

export default CreateEventModalBody