import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { modalReducer } from './modalSlice';
import { selectReducer } from './selectSlice';

export const store = configureStore({
    reducer: {
      contacts: contactsReducer,
      selectID: selectReducer,
        filter: filterReducer,
      modalShow: modalReducer,
    },
  });