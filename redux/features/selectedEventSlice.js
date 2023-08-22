const { createSlice } = require("@reduxjs/toolkit");

const initialState = null;

const selectedEventSlice = createSlice({
  name: 'selectedEvent',
  initialState,
  reducers: {
    setSelectedEvent: (state, action) => {
      return action.payload;
    }
  }
})

export const { setSelectedEvent } = selectedEventSlice.actions;
export default selectedEventSlice.reducer;