import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modalShow',
  initialState: false,
  reducers: {
    modalState: state => !state,
  },
});

export const modalReducer = modalSlice.reducer;
export const { modalState } = modalSlice.actions;