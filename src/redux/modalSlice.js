import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modalShow',
  initialState: false,
  reducers: {
    modalState: state => !state,
  },
});

export const { modalState } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;