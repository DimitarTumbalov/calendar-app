'use client';

import { getEvents } from "@/services/eventService";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = []

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      return action.payload;
    },
    addEvent: (state, action) => {
      state.push(action.payload);
    }
  }
})

export const { setEvents, addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;