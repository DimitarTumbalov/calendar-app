'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import styles from './EventFormModal.module.scss';
import colors from '../../colors.module.scss';
import { createEvent } from '@/services/eventService';
import { LabelIcon, TimeIcon, DescriptionIcon, DatePicker, TimePicker, EndIcon, CloseIcon } from '..';
import { setModal } from '@/redux/features/modalSlice';
import { addEvent } from '@/redux/features/eventsSlice';
import { DATE_FORMAT, DATE_TIME_FORMAT, LABEL_COLORS, REGEX, TIME_FORMAT } from '@/helpers/Constants';
import { setPopup } from '@/redux/features/popupSlice';
import { calendarEqualityFn } from '@/redux/features/calendarSlice';

const EventFormModal = ({show}) => {
  const dispatch = useDispatch()
  const calendar = useSelector(state => dayjs(state.calendar), calendarEqualityFn);
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [description, setDescription] = useState('');
  const [colorId, setColorId] = useState(0);

  const isTitleValid = REGEX.EVENT_TITLE.test(title);
  const isDescriptionValid = REGEX.EVENT_DESCRIPTION.test(description);
  const areDatesValid = dayjs(`${startDate} ${startTime}`, DATE_TIME_FORMAT).isBefore(dayjs(`${endDate} ${endTime}`, DATE_TIME_FORMAT));

  useEffect(() => {
    const startDateTime = dayjs(calendar).set('hour', 14).set('minute', 0);
    const endDateTime = dayjs(calendar).set('hour', 14).set('minute', 30);

    setStartDate(startDateTime.format(DATE_FORMAT));
    setStartTime(startDateTime.format(TIME_FORMAT));
    setEndDate(endDateTime.format(DATE_FORMAT));
    setEndTime(endDateTime.format(TIME_FORMAT));
  }, [calendar])

  useEffect(() => {
    if(!show){
      resetForm();
    }
  }, [show])

  const handleOnStartDateSelect = (date) => {
    setStartDate(date);
    setEndDate(date);
  }
  
  const handleOnStartTimeSelect = (time) => {
    setStartTime(time)
  }

  const handleOnEndDateSelect = (date) => {
    setEndDate(date);
  }
  
  const handleOnEndTimeSelect = (time) => {
    setEndTime(time)
  }

  const handleOnSaveEvent = () => {
    const event = {
      title: title.trim(),
      startDate,
      startTime,
      endDate,
      endTime,
      description: description.trim(),
      colorId
    }

    createEvent(event).then(res => res.json())
      .then(data => {
        dispatch(addEvent(data.event));
        closeModal();
      })
      .catch(err => console.log(err))
  }

  const resetForm = () => {
    setTitle('');
      //Reset Inputs
      setDescription('');
      setColorId(0);

      //Hide Popups
      dispatch(setPopup(null))
  }

  const closeModal = () => {
    dispatch(setModal(null));
  }

  if(!show)
    return null;

  return (
    <div  
      onClick={() => closeModal()} 
      className={styles.container}>
      <div
        onClick={(e) => e.stopPropagation()} 
        className={styles.modal}>
        {/* HEADER */}
        <div className={styles.header}>
          <p className={styles.headerTitle}>
            Event
          </p>
          <button
            onClick={() => closeModal()} 
            className={styles.closeBtn}>
            <CloseIcon height={20} color={colors.colorText}/>
          </button>
        </div>
        
        {/* BODY */}
        <div className={styles.body}>
          <input 
            maxLength={50}
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
              onChange={handleOnStartDateSelect}/>
            <TimePicker 
              name='startTime'
              value={startTime}
              onChange={handleOnStartTimeSelect}
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
              onChange={handleOnEndDateSelect}/>
            <TimePicker 
              name='endTime'
              value={endTime}
              onChange={handleOnEndTimeSelect}
              />
          </div>

          <div className={styles.row}>
            <DescriptionIcon 
              className={styles.icon}
              height='1.25rem'
              color={colors.colorTextSecondary}/>
            <textarea 
              maxLength={250}
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

        {/* FOOTER */}
        <div className={styles.footer}>
          <button 
            disabled={!isTitleValid || !isDescriptionValid || !areDatesValid}
            className={styles.saveBtn}
            onClick={() => handleOnSaveEvent()}>
            Save
          </button>
        </div>

      </div>
    </div>
  )
}

export default EventFormModal;