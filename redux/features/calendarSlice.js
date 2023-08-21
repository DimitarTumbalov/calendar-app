'use client';

import dayjs from "dayjs";
const { createSlice } = require("@reduxjs/toolkit");

const curDate = dayjs();

const initialState = {
  year: curDate.year(),
  month: curDate.month(),
  day: curDate.date()
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setCalendar: (state, action) => ({
      ...state,
      ...action.payload
    })
  }
})

export const { setCalendar } = calendarSlice.actions;
export default calendarSlice.reducer;