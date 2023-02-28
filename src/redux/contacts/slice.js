import { createSlice } from '@reduxjs/toolkit';
import { logOut, logIn, register, refreshUser } from '../auth/operations';
import { initialState } from '../../services/initial';
import { getContacts, addContact, delContact, editContact } from './operations';

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
  state.isFulfilled = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isFulfilled = false;
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
    [logOut.pending]: handlePending,
    [logIn.pending]: handlePending,
    [register.pending]: handlePending,
    [refreshUser.rejected]: handleRejected,
    [logOut.rejected]: handleRejected,
    [logIn.rejected]: handleRejected,
    [register.rejected]: handleRejected,
    [getContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts = payload;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isFulfilled = true;
      state.error = null;
      state.contacts.push(payload);
    },
    [delContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isFulfilled = true;
      state.error = null;
    },
    [editContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isFulfilled = true;
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
      state.isFulfilled = false;
    },
  },
  reducers: {
    resetIsFulfilled(state) {
      state.isFulfilled = false;
    },
  },
});

export const contactsReducer = contactSlice.reducer;
export const { resetIsFulfilled } = contactSlice.actions;