'use client';

import calendarSlice from "./features/calendarSlice";
import tabSlice from "./features/tabSlice";
import modalSlice from "./features/modalSlice";
import popupSlice from "./features/popupSlice";
import eventsSlice from "./features/eventsSlice";
import selectedEventSlice from "./features/selectedEventSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    tab: tabSlice,
    modal: modalSlice,
    popup: popupSlice,
    events: eventsSlice,
    selectedEvent: selectedEventSlice
  }
});