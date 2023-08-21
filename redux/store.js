'use client';

import calendarSlice from "./features/calendarSlice";
import tabSlice from "./features/tabSlice";
import modalSlice from "./features/modalSlice";
import smallCalendarSlice from "./features/smallCalendarSlice";

const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    smallCalendar: smallCalendarSlice,
    tab: tabSlice,
    modal: modalSlice
  }
});