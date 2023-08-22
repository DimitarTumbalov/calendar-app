'use client';

import { TABS } from "@/helpers/Constants";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = TABS[2];

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setTab: (state, action) => {
      return action.payload;
    }
  }
})

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;