import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initial';
import {
  getContacts,
  addContact,
  delContact,
  editContact,
} from '../redux/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactSlice = createSlice({
  name: 'phonebook',
  initialState: initialState,

  extraReducers: {
    [getContacts.pending]: handlePending,
    [getContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts = payload;
    },
    [getContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(payload);
    },
    [addContact.rejected]: handleRejected,
    [delContact.pending]: handlePending,
    [delContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === payload.id
      );
      state.contacts.splice(index, 1);
    },
    [delContact.rejected]: handleRejected,
    [editContact.pending]: handlePending,
    [editContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contacts => contacts.id === payload.id
      );
      state.contacts.splice(index, 1, payload);
    },
    [editContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactSlice.reducer;