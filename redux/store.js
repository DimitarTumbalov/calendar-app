'use client';

import calendarSlice from "./features/calendarSlice";

const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
  reducer: {
    calendar: calendarSlice
  }
});