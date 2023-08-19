'use client';

const { createSlice } = require("@reduxjs/toolkit");

const curDate = new Date();

const initialState = {
  year: curDate.getFullYear(),
  month: curDate.getMonth(),
  day: curDate.getDate(),
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    set: (state, action) => ({
      ...state,
      ...action.payload
    })
  }
})

export const { set } = calendarSlice.actions;
export default calendarSlice.reducer;