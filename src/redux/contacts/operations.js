import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch ({ response: { statusText } }) {
      return thunkAPI.rejectWithValue(
        statusText ? statusText : 'Error updating contact list'
      );
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      return data;
    } catch ({ response: { statusText } }) {
      return thunkAPI.rejectWithValue(
        statusText ? statusText : 'Error creating contact.'
      );
    }
  }
);

export const delContact = createAsyncThunk(
  'contacts/delContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch ({ response: { statusText } }) {
      return thunkAPI.rejectWithValue(
        statusText ? statusText : 'Contact deletion error.'
      );
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch ({ response: { statusText } }) {
      return thunkAPI.rejectWithValue(
        statusText ? statusText : 'Contact update failed.'
      );
    }
  }
);