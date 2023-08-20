'use client';

import calendarSlice from "./features/calendarSlice";
import modalSlice from "./features/modalSlice";

const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    modal: modalSlice
  }
});