import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './CreateEventModal.module.scss';
import colors from '../../colors.module.scss';
import { createEvent } from '@/services/eventService';
import { CreateEventModalFooter, CreateEventModalHeader, LabelIcon, TimeIcon, DescriptionIcon, DatePicker, TimePicker } from '..';
import { setModal } from '@/redux/features/modalSlice';

const CreateEventModal = ({show}) => {
  const dispatch = useDispatch()
  const calendar = useSelector(state => state.calendar);

  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date(calendar.year, calendar.month, calendar.day));
  const [startTime, setStartTime] = useState(1);
  const [description, setDescription] = useState('');
  const [colorId, setColorId] = useState(0);

  const handleStartDateOnSelect = (date) => {
    setStartDate(date);
  }
  
  const handleStartTimeOnSelect = (time) => {
    console.log(time);
  }

  const handleSaveEvent = () => {
    const startTimeDate = new Date(startTime)
    const event = {
      title,
      // startTime: startTimeDate,
      // endTime: startTimeDate,
      description,
      colorId
    }

    createEvent(event).then(res => res.json())
      .then(() => dispatch(setModal(null)))
      .catch(err => console.log(err))
  }

  if(!show)
    return null;

  return (
    <div className={styles.blur}>
      <div className={styles.modal}>
        <CreateEventModalHeader/>
        
        <div className={styles.body}>
          <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className={styles.titleInput}>
          </input>

          <div className={styles.row}>
            <TimeIcon 
              className={styles.icon}
              height='1.25rem'
              color={colors.colorTextSecondary}/>
            <DatePicker
              value={startDate} 
              onChange={handleStartDateOnSelect}/>
            <TimePicker 
              value={startTime}
              onChange={handleStartTimeOnSelect}
              />
            
          </div>

          {/* <div className={styles.row}>
            <TimeIcon 
              className={styles.icon}
              height='1.25rem'
              color={colors.colorTextSecondary}/>
            <input 
              value={startTime}
              onChange={(e) => {
                console.log(e.target.value)
                setStartTime(e.target.value)
              }}
              type="date"
              className={styles.dateTimePicker} />
          </div> */}

          <div className={styles.row}>
            <DescriptionIcon 
              className={styles.icon}
              height='1.25rem'
              color={colors.colorTextSecondary}/>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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

        <CreateEventModalFooter onSave={handleSaveEvent}/>
      </div>
    </div>
  )
}

export default CreateEventModal