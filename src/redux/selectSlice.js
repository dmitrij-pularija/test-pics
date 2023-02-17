import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constants';

const selectSlice = createSlice({
  name: 'selectID',
  initialState: initialState.filter,
  reducers: {
    selectContact: (state, { payload }) => (state = payload),
  },
});

export const { selectContact } = selectSlice.actions;
export const selectReducer = selectSlice.reducer;