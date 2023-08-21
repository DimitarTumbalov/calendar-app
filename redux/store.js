'use client';

import calendarSlice from "./features/calendarSlice";
import calendarTypeSlice from "./features/calendarTypeSlice";
import modalSlice from "./features/modalSlice";
import smallCalendarSlice from "./features/smallCalendarSlice";

const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    smallCalendar: smallCalendarSlice,
    calendarType: calendarTypeSlice,
    modal: modalSlice
  }
});