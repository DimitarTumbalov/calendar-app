'use client';

import dayjs from "dayjs";
const { createSlice } = require("@reduxjs/toolkit");

const curDate = dayjs();

const initialState = {
  year: curDate.year(),
  month: curDate.month(),
  day: curDate.date()
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