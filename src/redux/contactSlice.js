import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constants';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact(state, { payload }) {
      state.push(payload);
    },
    delContact(state, { payload }) {
      const index = state.findIndex(contacts => contacts.id === payload);
      state.splice(index, 1);
    },
    editContact(state, { payload }) {
      const index = state.findIndex(contacts => contacts.id === payload.id);
      state.splice(index, 1, payload);
    },
  },
});

export const contactsReducer = contactSlice.reducer;
export const { addContact, delContact, editContact } = contactSlice.actions;