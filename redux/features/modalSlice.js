const { createSlice } = require("@reduxjs/toolkit");

const initialState = 'event';

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action) => {
      return action.payload;
    }
  }
})

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;