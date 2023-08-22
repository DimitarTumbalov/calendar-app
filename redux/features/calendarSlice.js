'use client';

import dayjs from "dayjs";
const { createSlice } = require("@reduxjs/toolkit");

export const calendarEqualityFn = (a, b) => a.valueOf() == b.valueOf();

const initialState = dayjs().valueOf();

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setCalendar: (state, action) => {
      return action.payload;
    },
    decreaseDay: (state) => {
      return dayjs(state).subtract(1, 'day').valueOf();;
    },
    increaseDay: (state) => {
      return dayjs(state).add(1, 'day').valueOf();;
    },
    decreaseMonth: (state) => {
      return dayjs(state).subtract(1, 'month').valueOf();;
    },
    increaseMonth: (state) => {
      return dayjs(state).add(1, 'month').valueOf();;
    },
    decreaseYear: (state) => {
      return dayjs(state).subtract(1, 'year').valueOf();;
    },
    increaseYear: (state) => {
      return dayjs(state).add(1, 'year').valueOf();;
    }

  }
})

export const { setCalendar, decreaseDay, increaseDay, decreaseMonth, increaseMonth, decreaseYear, increaseYear } = calendarSlice.actions;
export default calendarSlice.reducer;