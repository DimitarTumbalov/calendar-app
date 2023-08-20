'use client';

const { createSlice } = require("@reduxjs/toolkit");

const curDate = new Date();

const initialState = {
  year: curDate.getFullYear(),
  month: curDate.getMonth(),
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