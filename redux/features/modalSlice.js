const { createSlice } = require("@reduxjs/toolkit");

const initialState = null;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action) => action.payload
  }
})

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;