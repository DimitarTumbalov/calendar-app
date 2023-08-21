'use client';

const { createSlice } = require("@reduxjs/toolkit");

const curDate = new Date();

const initialState = {
  year: curDate.getFullYear(),
  month: curDate.getMonth(),
  day: curDate.getDate()
}

const smallCalendarSlice = createSlice({
  name: 'smallCalendar',
  initialState,
  reducers: {
    setSmallCalendar: (state, action) => ({
      ...state,
      ...action.payload
    })
  }
})

export const { setSmallCalendar } = smallCalendarSlice.actions;
export default smallCalendarSlice.reducer;