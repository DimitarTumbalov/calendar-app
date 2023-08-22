'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import styles from './CreateEventModal.module.scss';
import colors from '../../colors.module.scss';
import { createEvent } from '@/services/eventService';
import { CreateEventModalFooter, CreateEventModalHeader, LabelIcon, TimeIcon, DescriptionIcon, DatePicker, TimePicker, EndIcon } from '..';
import { setModal } from '@/redux/features/modalSlice';
import { addEvent } from '@/redux/features/eventsSlice';
import { DATE_FORMAT, LABEL_COLORS, TIME_FORMAT } from '@/helpers/Constants';

const CreateEventModal = ({show}) => {
  const curDate = dayjs().set('minute', 0).add(1, 'hour');
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(curDate.format(DATE_FORMAT));
  const [startTime, setStartTime] = useState(curDate.format(TIME_FORMAT));
  const [endDate, setEndDate] = useState(curDate.format(DATE_FORMAT));
  const [endTime, setEndTime] = useState(curDate.format(TIME_FORMAT));
  const [description, setDescription] = useState('');
  const [colorId, setColorId] = useState(0);

  const handleStartDateOnSelect = (date) => {
    setStartDate(date);
  }
  
  const handleStartTimeOnSelect = (time) => {
    setStartTime(time)
  }

  const handleEndDateOnSelect = (date) => {
    setEndDate(date);
  }
  
  const handleEndTimeOnSelect = (time) => {
    setEndTime(time)
  }

  const handleSaveEvent = () => {
    const event = {
      title,
      startDate,
      startTime,
      endDate,
      endTime,
      description,
      colorId
    }

    createEvent(event).then(res => res.json())
      .then(data => {
        dispatch(setModal(null));
        dispatch(addEvent(data.event));
      })
      .catch(err => console.log(err))
  }

  if(!show)
    return null;

  return (
    <div className={styles.container}>
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
              name='startDate'
              value={startDate} 
              onChange={handleStartDateOnSelect}/>
            <TimePicker 
              name='startTime'
              value={startTime}
              onChange={handleStartTimeOnSelect}
              />
          </div>

          <div className={styles.row}>
            <EndIcon 
              className={styles.icon}
              height='1.25rem'
              color={colors.colorTextSecondary}/>
            <DatePicker
              name='endDate'
              value={endDate} 
              onChange={handleEndDateOnSelect}/>
            <TimePicker 
              name='endTime'
              value={endTime}
              onChange={handleEndTimeOnSelect}
              />
          </div>

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
            {LABEL_COLORS.map((color, index) => 
              <div key={color} 
                onClick={() => setColorId(index)}
                style={{background: color}} 
                className={styles.colorOption}> 
                {colorId == index &&
                <div className={styles.selected}/> }
              </div>
            )}
          </div>
        </div>

        <CreateEventModalFooter onSave={handleSaveEvent}/>
      </div>
    </div>
  )
}

export default CreateEventModal