import { createSlice } from '@reduxjs/toolkit';
import { initialStatus } from '../../services/initial';

const statusSlice = createSlice({
  name: 'status',
  initialState: initialStatus,
  reducers: {
    selectContact(state, { payload }) {
      state.selectID = payload;
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    modalState(state) {
      state.modalShow = !state.modalShow;
    },
  },
});

export const statusReducer = statusSlice.reducer;
export const { setFilter, modalState, selectContact } = statusSlice.actions;