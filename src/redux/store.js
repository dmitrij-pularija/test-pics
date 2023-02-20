import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { statusReducer } from './statusSlice';

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
    status: statusReducer,
  },
});