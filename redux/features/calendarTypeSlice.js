'use client';

import { CALENDAR_TYPES } from "@/helpers/Constants";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = CALENDAR_TYPES[2];

const calendarTypeSlice = createSlice({
  name: 'calendarType',
  initialState,
  reducers: {
    setCalendarType: (state, action) => action.payload
  }
})

export const { setCalendarType } = calendarTypeSlice.actions;
export default calendarTypeSlice.reducer;