'use client';

import calendarSlice from "./features/calendarSlice";
import tabSlice from "./features/tabSlice";
import smallCalendarSlice from "./features/smallCalendarSlice";
import modalSlice from "./features/modalSlice";
import popupSlice from "./features/popupSlice";
import eventsSlice from "./features/eventsSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    smallCalendar: smallCalendarSlice,
    tab: tabSlice,
    modal: modalSlice,
    popup: popupSlice,
    events: eventsSlice
  }
});