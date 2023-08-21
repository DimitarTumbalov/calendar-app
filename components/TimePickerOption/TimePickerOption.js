import React from 'react';

const TimePickerOption = ({option, onClick}) => {
  return (
    <button
      onClick={() => onClick(option)}>
      {option}
    </button>
  )
}

export default TimePickerOption;