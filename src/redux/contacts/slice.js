import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import { initialState } from '../../services/initial';
import {
  getContacts,
  addContact,
  delContact,
  editContact,
} from './operations';

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
    [getContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [delContact.pending]: handlePending,
    [delContact.rejected]: handleRejected,
    [editContact.pending]: handlePending,
    [editContact.rejected]: handleRejected,
    [getContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts = payload;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(payload);
    },
    [delContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === payload.id
      );
      state.contacts.splice(index, 1);
    },
    [editContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contacts => contacts.id === payload.id
      );
      state.contacts.splice(index, 1, payload);
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactSlice.reducer;