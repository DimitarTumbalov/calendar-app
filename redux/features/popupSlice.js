const { createSlice } = require("@reduxjs/toolkit");

const initialState = null;

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setPopup: (state, action) => action.payload
  }
})

export const { setPopup } = popupSlice.actions;
export default popupSlice.reducer;